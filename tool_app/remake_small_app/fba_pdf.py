import fitz  # PyMuPDF

# 打开PDF文件
pdf_document = fitz.open("pdf/upload/package.pdf")
old_text = 'FBA: QUANFU INDUSTRIAL TECHNOLOGY CO.,LTD.'

# 遍历每一页PDF
for page in pdf_document:
    # 搜索文本
    areas = page.search_for(old_text)
    
    # 如果找到了文本，就用空字符串替换它
    for rect in areas:
        page.add_redact_annot(rect)
        page.apply_redactions()

# 保存修改后的PDF
pdf_document.save("pdf/output/package-modified.pdf")
pdf_document.close()

print("PDF文件修改完成！")
