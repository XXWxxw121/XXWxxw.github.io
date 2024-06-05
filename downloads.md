---
layout: page
permalink: /downloads/index.html
title: Downloads
---

#### 1. LAB Logo 原图下载

- <img src="https://usst-lilab.github.io/file/LAB logo.png" style="zoom:5%;">，[download](https://usst-lilab.github.io/file/LAB logo.png)
- <img src="https://usst-lilab.github.io/file/LiLAB.png" style="zoom:7%;">，[download](https://usst-lilab.github.io/file/LiLAB.png)
- <img src="https://usst-lilab.github.io/file/QR code.png" style="zoom:10%;">，[dowload](https://usst-lilab.github.io/file/QR code.png)

#### 2. 常用软件与工具

- [MATLAB](https://www.mathworks.com/products/matlab.html)
- [CVX](https://cvxr.com/cvx/)
- [YALMIP](https://yalmip.github.io/)

#### 3.毕业相关

- [硕博士论文LaTex模板 (非官方)](https://usst-lilab.github.io/file/The unofficial LaTeX thesis template for USST (上海理工大学非官方LaTex模版).zip)
   - [Overleaf](https://www.overleaf.com/latex/templates/the-unofficial-latex-thesis-template-for-usst-shang-hai-li-gong-da-xue-fei-guan-fang-latexmo-ban/zwkphyybmjyv) (推荐), developed by Wangyan Li.
- [理学院研究生学术成果要求及认定细则](https://lxy.usst.edu.cn/_upload/article/files/96/f7/b92529b8477d842915ff8a18c605/166ee643-c193-4827-ac5c-ae328304e881.pdf)
- [答辩决议模板](https://usst-lilab.github.io/file/答辩决议.docx)
- [答辩PPT模板](https://usst-lilab.github.io/file/实验室PPT模板.pptx)

#### 4. Some useful links

- [上海理工大学](https://www.usst.edu.cn/main.htm)
- [理学院](https://lxy.usst.edu.cn/main.htm)
- 校园邮箱登录
  - [教师](https://mail.usst.edu.cn/)
  - [学生](https://edu.icoremail.net/coremail/)
- [Overleaf](https://www.overleaf.com/)
- [doi2bib](https://www.doi2bib.org/)

#### 5.LiLAB介绍
<html>

<head>
  <title>视频密码验证</title>
  <style>
    #password-form {
      text-align: center;
      margin-top: 100px;
    }
  </style>
</head>
<body>

  <div id="password-form">
    <h6><img src="https://usst-lilab.github.io/images/logo/passport.png" alt="Email Icon" style="width: 22px; height: 22px;">请输入密码以播放视频</h6>
    <input type="password" id="password-input">
    <br><br>
    <button onclick="checkPassword()">提交</button>
    <p id="error-message" style="color: red; display: none;">密码错误，请重试</p>
  </div>  <video width="80%" id="video-player" style="display: none;" controls>

    <source src="https://usst-lilab.github.io/file/LiLAB.mp4" type="video/mp4">
  </video><script>
    function checkPassword() {
      var enteredPassword = document.getElementById('password-input').value;
      var correctPassword = 'usstlilab'; // 设置正确的密码
      if (enteredPassword === correctPassword) {
    document.getElementById('password-form').style.display = 'none';
    document.getElementById('video-player').style.display = 'block';
    document.getElementById('video-player').play();
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}</script>
</body>
</html>
