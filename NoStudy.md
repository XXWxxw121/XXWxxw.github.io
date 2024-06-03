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

<div align="center">
<img src="https://usst-lilab.github.io/images/NoStudy/bag.png">
</div><br>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片滑动查看</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            overflow: hidden;
        }

        .slider {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: auto;
            overflow: hidden;
        }
    
        .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
    
        .slide {
            min-width: 100%;
            box-sizing: border-box;
        }
    
        .slide img {
            width: 100%;
            display: block;
        }
    
        button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            z-index: 10;
        }
    
        button.prev {
            left: 10px;
        }
    
        button.next {
            right: 10px;
        }
    </style>
</head>
<body>
    <div class="slider">
        <div class="slides">
            <div class="slide"><img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 1"></div>
            <div class="slide"><img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 2"></div>
            <div class="slide"><img src="https://usst-lilab.github.io/images/NoStudy/bag3.jpg" alt="Image 3"></div>
        </div>
    </div>
​    <button class="prev" onclick="prevSlide()">&#10094;</button>
​    <button class="next" onclick="nextSlide()">&#10095;</button>
    <script>
        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }
            
            slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        }
    
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
    
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
    
        document.addEventListener('DOMContentLoaded', () => {
            showSlide(currentSlide);
        });
    </script>
</body>
</html>
