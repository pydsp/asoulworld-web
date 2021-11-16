const LOGO_PATH = "img/logo/"
const BANNER_PATH = "img/banner/"
const AVATAR_PATH = BANNER_PATH+"avatar/"
const N1_PATH = "img/n1/"
const N2_PATH = "img/n2/"
const N3_PATH = "img/n3/"
const BILI_SPACE = "https://space.bilibili.com/"
const LIVE_URL = "https://live.bilibili.com/"
const GET_LIVING_STATUS_CYCLE=3
const live_box=[]
const API_URL="https://www.asoulworld.com/api/"
const API_CHECK_LIVE=API_URL+"v1/checkLive.php"


$(window).on('load', function () {
    let banner = $("div#banner")
    let web = $("div#nav1")
    let recorder = $("div#nav2")
    let tools = $("div#nav3")

    let bannerItem = banner.html()
    let webItem = web.html()
    let recorderItem = recorder.html()
    let toolsItem = tools.html()

    banner.empty()
    web.empty()
    recorder.empty()
    tools.empty()


    //$("div.intro-content").css("background-image","")


    //banner init
    $.getJSON("config/banner.json", function (data) {

        //banner data init
        $.each(data, function (index, json) {
            const a = $(bannerItem)
            let bg = a.find("div.banner-background")
            let logo = a.find("img.logo-size")
            bg.addClass("bg-"+json["member"])

            logo.attr("src", AVATAR_PATH + "avatar-"+json["member"]+".webp")
            let nowTime=(new Date()).format("MM-dd")
            console.log(nowTime)
            if (json["birthday"]!==nowTime) {
                a.find("#birthday-logo").remove()
            }
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["intro"])
            a.find("#space-link").attr("href", BILI_SPACE + json["bili_uid"])
            a.find("#live-link").attr("href", LIVE_URL + json["live_uid"])
            $("div#banner").append(a)
            live_box.push(a.find("div.live-status-box"))
        })

        //bannerUI初始化后首次请求
        requestLiveStatus()

    })

    //website init
    $.getJSON("config/website.json", function (data) {
        $.each(data, function (index, json) {
            const a = $(webItem);
            a.find("a").attr("href", json["link"])
            a.find("img.logo-size").attr("src", N1_PATH + json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay", index / 10 + "s")
            if(json["error"]!==1)
            {
                a.find("img.status-logo").remove()
            }
            switch (json["type"]) {
                case 1:
                    a.find("img.type-logo").attr("src", LOGO_PATH + "fanmade.png")
                    break;
                default:
                    a.find("img.type-logo").remove()
            }
            $("div#nav1").append(a)
        })
    })

    //recorder init
    $.getJSON("config/recorder.json", function (data) {
        $.each(data, function (index, json) {
            const a = $(recorderItem);
            a.find("a").attr("href", json["link"])
            a.find("img.logo-size").attr("src", N2_PATH + json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay", index / 10 + "s")
            switch (json["type"]) {
                case 1:
                    a.find("img.type-logo").attr("src", LOGO_PATH + "bilibili.ico")
                    break;
                case 2:
                    a.find("img.type-logo").attr("src", LOGO_PATH + "wyy.ico")
                    break;
                default:
                    a.find("img.type-logo").remove()
            }
            $("div#nav2").append(a)
        })
    })

    //tools init
    $.getJSON("config/tools.json", function (data) {
        $.each(data, function (index, json) {
            const a = $(toolsItem);
            a.find("a").attr("href", json["link"])
            a.find("img.logo-size").attr("src", N3_PATH + json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay", index / 10 + "s")
            switch (json["type"]) {
                case 1:
                    a.find("img.type-logo").attr("src", LOGO_PATH + "vscode.ico")
                    break;
                case 2:
                    a.find("img.type-logo").remove()
                    a.find("div.serv-icon").addClass("serv-icon-fix").removeClass("serv-icon")
                    a.find("img.logo-size").addClass("logo-scale")
                    a.find("a").click(function () {
                        return false
                    })
                    break;
                case 3:
                    a.find("img.type-logo").attr("src", LOGO_PATH + "vuejs.svg")
                    break;
                default:
                    a.find("img.type-logo").remove()
            }
            $("div#nav3").append(a)
        })
    })

    //定时任务
    setInterval("requestLiveStatus()",GET_LIVING_STATUS_CYCLE*60000)
})
Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
                (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


function requestLiveStatus()
{
    console.log("clock test")
    $.getJSON(API_CHECK_LIVE, function (data) {
        $.each(data, function (index, json) {
            let status=parseInt(json["status"])
            switch (status)
            {
                case 1:
                    live_box[index].find("img#live-dot").attr("src",BANNER_PATH+"living-1.svg")
                    live_box[index].find("img#live-dot").addClass("living-anime")
                    live_box[index].attr("title","该成员正在直播！")
                    break
                case 2:
                    live_box[index].find("img#live-dot").attr("src",BANNER_PATH+"living-2.svg")
                    live_box[index].find("img#live-dot").removeClass("living-anime")
                    live_box[index].attr("title","该成员今天有直播哦~直播内容为 "+json["type"])
                    break
                default:
                    live_box[index].find("img#live-dot").attr("src",BANNER_PATH+"living-0.svg")
                    live_box[index].find("img#live-dot").removeClass("living-anime")
                    live_box[index].attr("title","该成员今天没有直播哦~")
                    break
            }
        })
    })
}
