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




<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Carousel</title>
  <style>
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 500px;
      overflow: hidden;
    }

    .carousel img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.5s ease;
    }
    
    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      cursor: pointer;
    }
    
    .prev {
      left: 20px;
    }
    
    .next {
      right: 20px;
    }
  </style>
</head>
<body>
  <div class="carousel">
    <img src="https://usst-lilab.github.io/images/NoStudy/4.jpg" alt="Image 1">
    <img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 2">
    <img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 3">
    <div class="prev">&lt;</div>
    <div class="next">&gt;</div>
  </div>

  <script>
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    let currentIndex = 0;
    
    function showImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.style.transform = 'translateX(0)';
        } else if (i < index) {
          img.style.transform = 'translateX(-100%)';
        } else {
          img.style.transform = 'translateX(100%)';
        }
      });
    }
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
    
    showImage(currentIndex);
  </script>
</body>
</html>





