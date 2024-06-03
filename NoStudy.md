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
<!DOCTYPE html>
<html>
<head>
    <title>无缝滚动</title>
    <style type="text/css">
    *{margin:0;padding: 0;}
        .roll .wrap{width:1500px;overflow: hidden; height: 344px;margin: 0 auto;position: relative;}
        .roll li{float: left;list-style: none;width: 700px;height: 344px;}
        .roll ul{position: absolute;top: 0;left: 0;}
    }
    </style>
    <script type="text/javascript">
        window.onload=function(){
            var oDiv=document.getElementById('roll');
            var oUl=oDiv.getElementsByTagName('ul')[0];
            var aLi=oUl.getElementsByTagName("li");
            var iSpeed=-5;
            var timer=null;
            oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
            timer=setInterval(function(){
                oUl.style.left=oUl.offsetLeft+iSpeed+'px';
                if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oUl.style.left='0px';
                }
            },30);

            oUl.onmouseover=function(){
            clearInterval(timer);
        }
        oUl.onmouseout=function(){
            timer=setInterval(function(){
                oUl.style.left=oUl.offsetLeft+iSpeed+'px';
                if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oul.style.left='0px';
                }
            },30);
        }
        };
        
    </script>
</head>
<body>

<div class="roll" id="roll">
    <div class="wrap">
        <ul>
            <li><img src="https://usst-lilab.github.io/images/NoStudy/4.jpg"></li>
            <li><img src="https://usst-lilab.github.io/images/NoStudy/bag1.jpg"></li>
            <li><img src="https://usst-lilab.github.io/images/NoStudy/bag2.jpg"></li>
            <li><img src="https://usst-lilab.github.io/images/NoStudy/bag3.jpg"></li>
            <li><img src="https://usst-lilab.github.io/images/NoStudy/bag.png"></li>
        </ul>
    </div>
</div>

</body>
</html>

