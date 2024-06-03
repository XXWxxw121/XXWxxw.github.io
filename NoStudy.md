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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
    <style>
        * { box-sizing: border-box; }

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
    
        .slides img {
            width: 100%;
            border: none;
        }
    
        .navigation {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }
    
        .prev, .next {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 18px;
        }
    </style>
</head>
<body>

<div class="slider">
    <div class="slides">
        <img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 1">
        <img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 2">
        <img src="https://usst-lilab.github.io/images/NoStudy/bag3.jpg" alt="Image 3">
    </div>
    <div class="navigation">
        <button class="prev">&#10094;</button>
        <button class="next">&#10095;</button>
    </div>
</div>


<script>
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(idx) {
        const width = images[0].clientWidth;
        slides.style.transform = `translateX(${-width * idx}px)`;
    }
    
    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        showSlide(index);
    });
    
    next.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        showSlide(index);
    });
</script>

</body>
</html>
