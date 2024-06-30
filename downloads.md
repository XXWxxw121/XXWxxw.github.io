---
layout: page
permalink: /downloads/index.html
title: Downloads
---

#### 1. LAB Logo 原图下载

- <img src="https://usst-lilab.github.io/file/LAB logo.png" style="zoom:5%;">，

  [download](https://usst-lilab.github.io/file/LAB logo.png)

- <img src="https://usst-lilab.github.io/file/LiLAB.png" style="zoom:7%;">，<img src="https://usst-lilab.github.io/file/QR code.png" style="zoom:10%;">，

  [download](https://usst-lilab.github.io/file/LiLAB.png)，[dowload](https://usst-lilab.github.io/file/QR code.png)

#### 2. 常用软件与工具

- [MATLAB](https://www.mathworks.com/products/matlab.html)
- [CVX](https://cvxr.com/cvx/)，[YALMIP](https://yalmip.github.io/)

#### 3.学习资料

- [常用不等式](https://usst-lilab.github.io/file/ineq.pdf)

#### 4.毕业相关

- [硕博士论文LaTex模板 (非官方)](https://usst-lilab.github.io/file/The unofficial LaTeX thesis template for USST (上海理工大学非官方LaTex模版).zip)
   - [Overleaf](https://www.overleaf.com/latex/templates/the-unofficial-latex-thesis-template-for-usst-shang-hai-li-gong-da-xue-fei-guan-fang-latexmo-ban/zwkphyybmjyv) (推荐), developed by Wangyan Li.
- [理学院研究生学术成果要求及认定细则](https://lxy.usst.edu.cn/_upload/article/files/96/f7/b92529b8477d842915ff8a18c605/166ee643-c193-4827-ac5c-ae328304e881.pdf)
- [答辩决议模板](https://usst-lilab.github.io/file/答辩决议.docx)
- [答辩PPT模板](https://usst-lilab.github.io/file/实验室PPT模板.pptx)

#### 5. Some useful links

- [上海理工大学](https://www.usst.edu.cn/main.htm)，[理学院](https://lxy.usst.edu.cn/main.htm)
- 校园邮箱登录入口：[教师](https://mail.usst.edu.cn/)，[学生](https://edu.icoremail.net/coremail/)
- [Overleaf](https://www.overleaf.com/)，[doi2bib](https://www.doi2bib.org/)
- [inControl](https://www.incontrolpodcast.com/)

#### 6.LiLAB介绍
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protected Video</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .video-container {
            position: relative;
            width: 640px;
            height: 360px;
        }
        video {
            width: 100%;
            height: 100%;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .overlay.hidden {
            display: none;
        }
        #password-input {
            margin-top: 10px;
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
        }
        button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #error-message {
            display: none;
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="video-container">
    <video id="video" controls>
        <source src="your-video-file.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div id="overlay" class="overlay">
        <div>Please enter the password to watch the video</div>
        <input type="password" id="password-input" placeholder="Enter password">
        <button onclick="checkPassword()">Submit</button>
        <div id="error-message">Incorrect password, please try again.</div>
    </div>
</div>

<script>
    const correctPassword = "your-password"; // Replace with your desired password

    function checkPassword() {
        const inputPassword = document.getElementById('password-input').value;
        if (inputPassword === correctPassword) {
            document.getElementById('overlay').classList.add('hidden');
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('video').play();
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    }
</script>

</body>
</html>
