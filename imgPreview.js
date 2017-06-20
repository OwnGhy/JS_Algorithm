function prrviewImg (file,el) {
    // el.innerHTML = '';
    console.log(el);
    for(var i = 0, len = file.files.length; i < len ; i++){
        // el.innerHTML += "<div class='img-item' > <img id='img" + i + "'  /> </div>";
        //
        // var imgObjPreview = document.getElementById("img"+i);
        var imgObjPreview = document.createElement('img');
        imgObjPreview.id = 'img' + i;

        if (file.files && file.files[i]) {
            //火狐下，直接设img属性
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要以下方式
            imgObjPreview.src = window.URL.createObjectURL(file.files[i]);   //获取上传图片文件的物理路径
        }else{
            //IE下，使用滤镜
            file.select();
            var imgSrc = document.selection.createRange().text;
            //必须设置初始大小
            imgObjPreview.style.width = "200px";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                imgObjPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgObjPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
            } catch (e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview.style.display = 'none';
            document.selection.empty();
        }

        el[0].appendChild(imgObjPreview);
    }
}