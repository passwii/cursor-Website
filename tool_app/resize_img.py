from PIL import Image
from flask import Blueprint, request, send_file, render_template, url_for
import io
import tempfile
import os

main_resize_img = Blueprint('main_resize_img', __name__)

def resize_image(image_file, target_size=(2000, 2000), target_size_kb=(300, 500)):
    # 打开图片
    img = Image.open(image_file)
    
    # 调整图片大小
    img.thumbnail(target_size, Image.LANCZOS)
    
    # 创建一个字节流来保存图片
    img_byte_arr = io.BytesIO()
    
    # 初始质量
    quality = 95
    
    while True:
        # 清空字节流
        img_byte_arr.seek(0)
        img_byte_arr.truncate(0)
        
        # 保存图片到字节流
        img.save(img_byte_arr, format='JPEG', quality=quality)
        
        # 获取当前大小
        current_size = img_byte_arr.tell() / 1024  # 转换为KB
        
        # 检查是否在目标大小范围内
        if target_size_kb[0] <= current_size <= target_size_kb[1]:
            break
        elif current_size > target_size_kb[1]:
            quality -= 5
        else:
            quality += 5
        
        # 防止无限循��
        if quality <= 0 or quality >= 100:
            break
    
    # 返回调整后的图片数据
    return img_byte_arr.getvalue()

@main_resize_img.route('/resize_image', methods=['GET', 'POST'])
def resize_image_route():
    if request.method == 'POST':
        if 'image' not in request.files:
            return '没有上传文件', 400
        
        file = request.files['image']
        if file.filename == '':
            return '没有选择文件', 400
        
        if file:
            # 调整图片大小
            resized_image = resize_image(file)
            
            # 创建临时文件来保存调整后的图片
            temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.jpg')
            temp_file.write(resized_image)
            temp_file.close()
            
            # 渲染模板，传递调整后图片的URL
            return render_template('toolset/resize_image.html', 
                                   resized_image_url=url_for('static', filename=os.path.basename(temp_file.name)))
    
    return render_template('toolset/resize_image.html')

# 添加一个路由来提供调整后的图片
@main_resize_img.route('/resized_images/<filename>')
def serve_resized_image(filename):
    return send_file(os.path.join(tempfile.gettempdir(), filename), mimetype='image/jpeg')






