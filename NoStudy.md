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
    <title>Image Slider</title>
    <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            flex-direction: column;
        }


        .regular-images img {
            max-width: 500px;
            margin: 10px;
        }
    
        .slider-container {
        width: 500px; /* Adjust to fit the largest image width */
        overflow: hidden;
        position: relative;
        margin-top: 20px;
    }
    
    .slider {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    
    .slider img {
        width: 100%;
        max-width: 500px; /* Adjust to fit the largest image width */
        flex-shrink: 0;
        object-fit: contain; /* Preserve aspect ratio */
    }
    
        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
    
        .arrow.left {
            left: 10px;
        }
    
        .arrow.right {
            right: 10px;
        }
    </style>
</head>
<body>

    <div class="slider-container">
        <button class="arrow left" onclick="slide(-1)">&#10094;</button>
        <div class="slider">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 1">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 2">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag3.jpg" alt="Image 3">
        </div>
        <button class="arrow right" onclick="slide(1)">&#10095;</button>
    </div>
    
    <script>
        let currentIndex = 0;
    
        function slide(direction) {
            const slider = document.querySelector('.slider');
            const images = document.querySelectorAll('.slider img');
            const totalImages = images.length;
            const imageWidth = images[0].clientWidth; // Exact width of one image
    
            currentIndex += direction;
    
            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            } else if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
    
            slider.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }
    </script>
</body>
</html>
