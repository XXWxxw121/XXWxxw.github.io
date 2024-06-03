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


<html>

<head>
    <style>
        .slider-container {
            width: 100%;
            overflow: hidden;
        }
        .slider {
        display: flex;
        width: 100%;
    }

    .slider img {
        width: 100%;
        height: auto;
    }
</style>
</head>
<body>

    <div class="slider-container">
        <div class="slider">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg" alt="Image 1">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg" alt="Image 2">
            <img src="https://usst-lilab.github.io/images/NoStudy/bag3.jpg" alt="Image 3">
        </div>
    </div><script>
    var sliderContainer = document.querySelector('.slider-container');
    var slider = document.querySelector('.slider');
    var isDragging = false;
    var startPosition = 0;
    var currentTranslate = 0;
    var prevTranslate = 0;
    
    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('touchstart', startDragging);
    slider.addEventListener('touchmove', drag);
    slider.addEventListener('touchend', stopDragging);
    slider.addEventListener('touchcancel', stopDragging);
    
    function startDragging(event) {
        if (event.type === 'touchstart') {
            startPosition = event.touches[0].clientX;
        } else {
            startPosition = event.clientX;
            event.preventDefault();
        }
    
        isDragging = true;
    }
    
    function drag(event) {
        if (isDragging) {
            var currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            currentTranslate = prevTranslate + currentPosition - startPosition;
        }
    }
    
    function stopDragging() {
        isDragging = false;
        prevTranslate = currentTranslate;
    }
    
    function updateSliderPosition() {
        slider.style.transform = 'translateX(' + currentTranslate + 'px)';
    }
    
    function resizeSlider() {
        var slideWidth = sliderContainer.offsetWidth;
        var totalTranslate = (slider.children.length - 1) * slideWidth;
        currentTranslate = Math.max(-totalTranslate, Math.min(0, currentTranslate));
    
        slider.style.width = slideWidth * slider.children.length + 'px';
        updateSliderPosition();
    }
    
    window.addEventListener('resize', resizeSlider);
    resizeSlider();
</script>
</body>
</html>
