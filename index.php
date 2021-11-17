<!DOCTYPE html>
<html lang="en">
<?php require "html-content/head.html"?>
<body>
<!-- Page Preloder -->
<div id="preloder">
    <img class="loader loader-rotate" src="img/website/load.png">
</div>

<!--====== Header Section Start ======-->
<header class="header-section">
    <div class="logo"></div>
    <div class="responsive"><i
            class="fa fa-bars"></i></div>
    <!-- Navigation -->
    <ul class="menu-list">
        <li><a href="#home">首页</a></li>
        <li><a href="#navigation-1">网站导航</a></li>
        <li><a href="#navigation-2">平台创作者导航</a>
        </li>
        <li><a href="#navigation-3">工具/插件汇总</a>
        </li>
    </ul>
</header>
<!--====== Header Section End ======-->


<!-- ==== Main Section Start ==== -->
<section class="intro-section" id="home">
        <div class="intro-content" >
            <div class="background-shadow2 linear-grad">
                <a href="" target="_blank">A-SOUL TIME~</a>
            </div>
        </div>
</section>
<!-- ==== Main Section End ==== -->

<main class="main-warp">
    <!--banner导航-->
    <section class="service-section" id="navigation-0">
        <div class="container-fluid pt20 pb10 desktop-limit">
            <div id="banner" class="row">
                <!--banner item-->
                <?php require "html-content/item/banner.html" ?>
            </div>
        </div>
    </section>
    <!--网站导航-->
    <section class="service-section"
             id="navigation-1">
        <div class="container-fluid pt20 pb10 desktop-limit">
            <div class="stitle mb70">
                <h2>网站导航</h2>
            </div>
            <div id="nav1" class="row">
                <!--website item-->
                <?php require "html-content/item/website.html" ?>
            </div>
        </div>
    </section>
    <!--平台创作者导航-->
    <section class="service-section"
             id="navigation-2">
        <div class="container-fluid pt10 pb10 desktop-limit">
            <div class="stitle mb70">
                <h2>平台创作者导航</h2>
            </div>
            <div id="nav2" class="row">
                <!--creator item-->
                <?php require "html-content/item/creator.html" ?>
            </div>
        </div>
    </section>
    <!--工具/插件汇总-->
    <section class="promotion-section2"
             id="navigation-3">
        <div class="container-fluid pt10 pb10 desktop-limit">
            <div class="stitle mb70">
                <h2>工具/插件汇总</h2>
            </div>
            <div id="nav3" class="row">
                <!--tools item-->
                <?php require "html-content/item/tools.html" ?>
            </div>
        </div>
    </section>
    <!-- ==== Contact Section End ==== -->
</main>


<!-- ==== Footer Section Start ==== -->
<footer class="footer-section fix">
    <div class="container">
        <p>© 2021 A-SOUL World &nbsp;&nbsp;
            <a data-toggle="modal" data-target="#contactUs">联系我们</a>
        </p>
    </div>
</footer>
<!-- ==== Footer Section End ==== -->
<?php require 'html-content/contact.html' ?>
<!--====== JavaScripts & Jquery ======-->
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/plugin.js"></script>
<script src="js/main.js"></script>
<script src="js/init-data.js"></script>
</body>
</html>
