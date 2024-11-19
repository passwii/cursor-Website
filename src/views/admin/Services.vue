<template>
  <div class="admin-services">
    <div class="admin-header">
      <h1>{{ $t('admin.services.title') }}</h1>
      <el-button type="primary" @click="showAddDialog">
        <i class="fas fa-plus"></i> {{ $t('admin.services.addNew') }}
      </el-button>
    </div>

    <!-- Services Table -->
    <el-table
      v-loading="loading"
      :data="services"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="icon" label="Icon" width="100">
        <template #default="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="title" :label="$t('admin.services.columns.title')">
        <template #default="scope">
          <div class="title-cell">
            <span>{{ scope.row.title }}</span>
            <el-tag size="small" :type="scope.row.status === 'active' ? 'success' : 'info'">
              {{ scope.row.status }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="category" :label="$t('admin.services.columns.category')" width="150" />
      <el-table-column prop="updatedAt" :label="$t('admin.services.columns.lastUpdated')" width="180">
        <template #default="scope">
          {{ formatDate(scope.row.updatedAt) }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('admin.services.columns.actions')" width="200" fixed="right">
        <template #default="scope">
          <el-button-group>
            <el-button size="small" type="primary" @click="handleEdit(scope.row)">
              <i class="fas fa-edit"></i>
            </el-button>
            <el-button size="small" type="info" @click="handlePreview(scope.row)">
              <i class="fas fa-eye"></i>
            </el-button>
            <el-button 
              size="small" 
              type="danger" 
              @click="handleDelete(scope.row)"
              :loading="deleteLoading === scope.row.id">
              <i class="fas fa-trash"></i>
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <!-- Pagination -->
    <div class="pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <!-- Add/Edit Dialog -->
    <el-dialog
      v-model="dialogVisible"
      :title="isEdit ? $t('admin.services.editService') : $t('admin.services.addService')"
      width="60%"
      :close-on-click-modal="false">
      <el-form
        ref="serviceForm"
        :model="serviceForm"
        :rules="rules"
        label-width="120px"
        class="service-form">
        <el-form-item :label="$t('admin.services.form.icon')" prop="icon">
          <el-input v-model="serviceForm.icon">
            <template #prefix>
              <i :class="serviceForm.icon || 'fas fa-icons'"></i>
            </template>
          </el-input>
        </el-form-item>
        
        <el-form-item :label="$t('admin.services.form.title')" prop="title">
          <el-input v-model="serviceForm.title" />
        </el-form-item>

        <el-form-item :label="$t('admin.services.form.category')" prop="category">
          <el-select v-model="serviceForm.category" style="width: 100%">
            <el-option
              v-for="category in categories"
              :key="category.value"
              :label="category.label"
              :value="category.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('admin.services.form.description')" prop="description">
          <el-input
            v-model="serviceForm.description"
            type="textarea"
            :rows="4"
          />
        </el-form-item>

        <el-form-item :label="$t('admin.services.form.content')" prop="content">
          <el-input
            v-model="serviceForm.content"
            type="textarea"
            :rows="6"
          />
        </el-form-item>

        <el-form-item :label="$t('admin.services.form.status')" prop="status">
          <el-switch
            v-model="serviceForm.status"
            :active-value="'active'"
            :inactive-value="'inactive'"
            :active-text="$t('admin.services.form.active')"
            :inactive-text="$t('admin.services.form.inactive')"
          />
        </el-form-item>

        <el-form-item :label="$t('admin.services.form.order')" prop="order">
          <el-input-number v-model="serviceForm.order" :min="0" :max="999" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">{{ $t('admin.common.cancel') }}</el-button>
          <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
            {{ $t('admin.common.save') }}
          </el-button>
        </span>
      </template>
    </el-dialog>

    <!-- Preview Dialog -->
    <el-dialog
      v-model="previewVisible"
      :title="$t('admin.services.preview')"
      width="70%">
      <div class="preview-content">
        <div class="preview-header">
          <i :class="previewData.icon"></i>
          <h2>{{ previewData.title }}</h2>
        </div>
        <div class="preview-body">
          <p class="description">{{ previewData.description }}</p>
          <div class="content" v-html="previewData.content"></div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { format } from 'date-fns'

const { t } = useI18n()

// Data
const loading = ref(false)
const services = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const dialogVisible = ref(false)
const previewVisible = ref(false)
const isEdit = ref(false)
const submitLoading = ref(false)
const deleteLoading = ref('')
const serviceForm = ref({
  id: '',
  icon: '',
  title: '',
  category: '',
  description: '',
  content: '',
  status: 'active',
  order: 0
})
const previewData = ref({
  icon: '',
  title: '',
  description: '',
  content: ''
})

// Form validation rules
const rules = {
  icon: [{ required: true, message: t('admin.services.validation.iconRequired'), trigger: 'blur' }],
  title: [{ required: true, message: t('admin.services.validation.titleRequired'), trigger: 'blur' }],
  category: [{ required: true, message: t('admin.services.validation.categoryRequired'), trigger: 'blur' }],
  description: [{ required: true, message: t('admin.services.validation.descriptionRequired'), trigger: 'blur' }]
}

const categories = [
  { value: 'ecosystem', label: t('admin.services.categories.ecosystem') },
  { value: 'ai', label: t('admin.services.categories.ai') },
  { value: 'logistics', label: t('admin.services.categories.logistics') },
  { value: 'marketing', label: t('admin.services.categories.marketing') }
]

// Methods
const formatDate = (date: string) => {
  return format(new Date(date), 'yyyy-MM-dd HH:mm')
}

const fetchServices = async () => {
  loading.value = true
  try {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/admin/services?page=${currentPage.value}&size=${pageSize.value}`)
    const data = await response.json()
    services.value = data.items
    total.value = data.total
  } catch (error) {
    ElMessage.error(t('admin.common.fetchError'))
  } finally {
    loading.value = false
  }
}

const handleSelectionChange = (val: any[]) => {
  // Handle multiple selection
}

const showAddDialog = () => {
  isEdit.value = false
  serviceForm.value = {
    id: '',
    icon: '',
    title: '',
    category: '',
    description: '',
    content: '',
    status: 'active',
    order: 0
  }
  dialogVisible.value = true
}

const handleEdit = (row: any) => {
  isEdit.value = true
  serviceForm.value = { ...row }
  dialogVisible.value = true
}

const handlePreview = (row: any) => {
  previewData.value = { ...row }
  previewVisible.value = true
}

const handleDelete = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      t('admin.services.deleteConfirm'),
      t('admin.common.warning'),
      {
        confirmButtonText: t('admin.common.confirm'),
        cancelButtonText: t('admin.common.cancel'),
        type: 'warning'
      }
    )
    
    deleteLoading.value = row.id
    // TODO: Replace with actual API call
    await fetch(`/api/admin/services/${row.id}`, { method: 'DELETE' })
    ElMessage.success(t('admin.services.deleteSuccess'))
    fetchServices()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error(t('admin.common.deleteError'))
    }
  } finally {
    deleteLoading.value = ''
  }
}

const handleSubmit = async () => {
  submitLoading.value = true
  try {
    // TODO: Replace with actual API call
    const method = isEdit.value ? 'PUT' : 'POST'
    const url = isEdit.value ? `/api/admin/services/${serviceForm.value.id}` : '/api/admin/services'
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceForm.value)
    })
    
    ElMessage.success(t('admin.services.saveSuccess'))
    dialogVisible.value = false
    fetchServices()
  } catch (error) {
    ElMessage.error(t('admin.common.saveError'))
  } finally {
    submitLoading.value = false
  }
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
  fetchServices()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchServices()
}

// Lifecycle
onMounted(() => {
  fetchServices()
})
</script>

<style lang="scss" scoped>
.admin-services {
  padding: 20px;

  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      margin: 0;
      font-size: 24px;
    }
  }

  .title-cell {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .service-form {
    max-height: 60vh;
    overflow-y: auto;
    padding-right: 20px;
  }

  .preview-content {
    .preview-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;

      i {
        font-size: 24px;
        color: var(--el-color-primary);
      }

      h2 {
        margin: 0;
      }
    }

    .preview-body {
      .description {
        color: var(--el-text-color-secondary);
        margin-bottom: 20px;
      }

      .content {
        line-height: 1.6;
      }
    }
  }
}

:deep(.el-dialog__body) {
  padding-top: 20px;
}
</style>
