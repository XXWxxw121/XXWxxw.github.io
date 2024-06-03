---
layout: page
permalink: /NoStudy/index.html
title: No Study Zone
---

#### LiLAB × Friends

##### LiLAB × [UNSW Computer Process Control Group](https://www.unsw.edu.au/research/computer-process-control-group)

###### 2024.03.18

<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/5.jpg">
</div><br>



##### LiLAB × X-Group

###### @长白228街坊（2024.05.09）

<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/228.jpg">
</div><br>
##### LiLAB + (Xiaozhen, Yaolei, Dou)

###### 2023.06.23


<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/3.jpg">
</div><br>
##### LAB周边

<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/4.jpg">
</div><br>
<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg">
</div><br>


<html>
<head>
  <meta charset="UTF-8">
  <title>Image Slider</title>
  <style>
    .slider-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    .slider-container img {
      width: auto;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    
    .slider-container img.active {
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="slider-container">
    <img src="https://usst-lilab.github.io/images/NoStudy/4.jpg" alt="Image 1">
    <img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 2">
    <img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 3">
  </div>

  <script>
    var images = document.querySelectorAll('.slider-container img');
    var currentIndex = 0;

    function showImage(index) {
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }
    
      images.forEach(function(image) {
        image.classList.remove('active');
      });
    
      images[index].classList.add('active');
      currentIndex = index;
    }
    
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 37) {
        showImage(currentIndex - 1);
      } else if (event.keyCode === 39) {
        showImage(currentIndex + 1);
      }
    });
    
    showImage(currentIndex);
  </script>
</body>
</html>
