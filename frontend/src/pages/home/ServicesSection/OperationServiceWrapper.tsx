import React from 'react';
import { motion } from 'framer-motion';
import {
    Binary,
    Repeat,
    Tags,
    Share2,
    BadgeCheck,
    UserCheck,
    Wrench,
    BarChart2,
    Boxes,
    Search,
    MessageCircle,
    Facebook,
    ShieldAlert,
    MessageSquare,
    Receipt,
    FileWarning,
    Package,
    Percent,
    TrendingDown,
    ClipboardList,
    BookOpen,
    Settings,
    PieChart,
    Calculator,
    BarChart,
    CalendarRange,
} from 'lucide-react';
import styles from './OperationServiceWrapper.module.css';

const OperationServiceWrapper: React.FC = () => {
    return (
        <div className={styles.operationServiceWrapper}>
            <h3 className={styles.subSectionTitle}></h3>
            <motion.p
                className={styles.operationDescription}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            </motion.p>
            <motion.div
                className={styles.scrollContainer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.div className={styles.serviceItemsTrack}>
                    <motion.div
                        className={styles.serviceItemsRow}
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            duration: 80,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }}
                        // 移除 whileHover={{ x: 0 }}
                    >
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Binary />
                            <span>A9算法</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Repeat />
                            <span>螺旋打法</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Tags />
                            <span>定价促销</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Share2 />
                            <span>站外推广</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <BadgeCheck />
                            <span>产品认证</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <UserCheck />
                            <span>客户联系</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Wrench />
                            <span>运营工具</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <BarChart2 />
                            <span>财务报表</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Boxes />
                            <span>库存管理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Search />
                            <span>新品探测</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <MessageCircle />
                            <span>Review 管理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Facebook />
                            <span>Facebook 群组</span>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.serviceItemsRow}
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            duration: 80,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }}
                        // 移除 whileHover={{ x: 0 }}
                    >
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Binary />
                            <span>A9算法</span>
                        </motion.div>
                            
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Repeat />
                            <span>螺旋打法</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Tags />
                            <span>定价促销</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Share2 />
                            <span>站外推广</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <BadgeCheck />
                            <span>产品认证</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <UserCheck />
                            <span>客户联系</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Wrench />
                            <span>运营工具</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <BarChart2 />
                            <span>财务报表</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Boxes />
                            <span>库存管理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Search />
                            <span>新品探测</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <MessageCircle />
                            <span>Review 管理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Facebook />
                            <span>Facebook 群组</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className={styles.serviceItemsTrack}>
                    <motion.div
                        className={styles.serviceItemsRow}
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{
                            duration: 75,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }}
                        // 移除 whileHover={{ x: '-100%' }}
                    >
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <ShieldAlert />
                            <span>店铺安全</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <MessageSquare />
                            <span>客诉处理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Receipt />
                            <span>VAT税法</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <FileWarning />
                            <span>Listing合规</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Package />
                            <span>爆款选品</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Percent />
                            <span>折扣优惠</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <TrendingDown />
                            <span>旺季销售</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <ClipboardList />
                            <span>绩效考核</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <BookOpen />
                            <span>FBA 手册</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Settings />
                            <span>AGL 操作</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <PieChart />
                            <span>ACOS 优化</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Calculator />
                            <span>产品核算分析</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <BarChart />
                            <span>项目核算</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <CalendarRange />
                            <span>全年销售规划</span>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.serviceItemsRow}
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{
                            duration: 75,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }}
                        // 移除 whileHover={{ x: '-100%' }}
                    >
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <ShieldAlert />
                            <span>店铺安全</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <MessageSquare />
                            <span>客诉处理</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <Receipt />
                            <span>VAT税法</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <FileWarning />
                            <span>Listing合规</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <Package />
                            <span>爆款选品</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Percent />
                            <span>折扣优惠</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <TrendingDown />
                            <span>旺季销售</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <ClipboardList />
                            <span>绩效考核</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <BookOpen />
                            <span>FBA 手册</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <Settings />
                            <span>AGL 操作</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#4B5A9A" }}
                        >
                            <PieChart />
                            <span>ACOS 优化</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#3D7A62" }}
                        >
                            <Calculator />
                            <span>产品核算分析</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#7E5AA6" }}
                        >
                            <BarChart />
                            <span>项目核算</span>
                        </motion.div>
                        <motion.div
                            className={styles.serviceItem}
                            style={{ color: "#A66F42" }}
                        >
                            <CalendarRange />
                            <span>全年销售规划</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default OperationServiceWrapper;