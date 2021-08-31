$(window).on('load', function() {
    let web = "<div class=\"col-md-2 col-sm-3 col-xs-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n" +
        "                    <a href=\"\"  target='_blank'>\n" +
        "                        <div class=\"service-item\">\n" +
        "                            <div class=\"serv-icon\">\n" +
        "                                <img class=\"logo-size\"\n" +
        "                                     src=\"img/n1/\"\n" +
        "                                     alt=\"\"/>\n" +
        "                                <p class=\"mt10 name-text\">\n" +
        "                                    test</p>\n" +
        "                            </div>\n" +
        "                            <div class=\"serv-content\">\n" +
        "                                <p class='desc-content'>test</p>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </a>\n" +
        "                </div>";
    let recorder="<div class=\"col-md-2 col-sm-3 col-xs-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n" +
        "                    <a href=\"\" target='_blank'>\n" +
        "                        <div class=\"service-item\">\n" +
        "                            <div class=\"serv-icon\">\n" +
        "                                <img class=\"logo-size\" src=\"\" alt=\"\"/>\n" +
        "                                <img class=\"type-logo\" src=\"\" alt=\"\"/>\n" +
        "                                <p class=\"mt10 name-text\"></p>\n" +
        "                            </div>\n" +
        "                            <div class=\"serv-content\">\n" +
        "                                <p class='desc-content'></p>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </a>\n" +
        "                </div>"
    let tools="<div class=\"col-md-2 col-sm-3 col-xs-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n" +
        "                    <a href=\"\" target='_blank'>\n" +
        "                        <div class=\"service-item\">\n" +
        "                            <div class=\"serv-icon\">\n" +
        "                                <img class=\"logo-size\" src=\"\" alt=\"\"/>\n" +
        "                                <img class=\"type-logo\" src=\"\" alt=\"\"/>\n" +
        "                                <p class=\"mt10 name-text\"></p>\n" +
        "                            </div>\n" +
        "                            <div class=\"serv-content\">\n" +
        "                                <p class='desc-content'></p>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </a>\n" +
        "                </div>"
    const LOGO_PATH="img/logo/"
    const N1_PATH="img/n1/"
    const N2_PATH="img/n2/"
    const N3_PATH="img/n3/"
    $.getJSON("data/website.json",function (data) {
        $.each(data,function (index, json) {
            console.log(index)
            const a = $(web);
            a.find("a").attr("href",json["link"])
            a.find("img.logo-size").attr("src",N1_PATH+json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay",index/10+"s")
            console.log(a.html())
            $("div#nav1").append(a)
        })
    })
    $.getJSON("data/recorder.json",function (data) {
        $.each(data,function (index, json) {
            const a = $(recorder);
            a.find("a").attr("href",json["link"])
            a.find("img.logo-size").attr("src",N2_PATH+json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay",index/10+"s")
            switch (json["type"])
            {
                case 1:
                    a.find("img.type-logo").attr("src",LOGO_PATH+"bilibili.ico")
                    break;
                case 2:
                    a.find("img.type-logo").attr("src",LOGO_PATH+"wyy.ico")
                    break;
                default:
                    a.find("img.type-logo").remove()
            }
            $("div#nav2").append(a)
        })
    })
    $.getJSON("data/tools.json",function (data) {
        $.each(data,function (index, json) {
            const a = $(tools);
            a.find("a").attr("href",json["link"])
            a.find("img.logo-size").attr("src",N3_PATH+json["icon"])
            a.find("p.name-text").text(json["name"])
            a.find("p.desc-content").text(json["desc"])
            a.attr("data-wow-delay",index/10+"s")
            switch (json["type"])
            {
                case 1:
                    a.find("img.type-logo").attr("src",LOGO_PATH+"vscode.ico")
                    break;
                case 2:
                    a.find("img.type-logo").remove()
                    a.find("div.serv-icon").addClass("serv-icon-fix").removeClass("serv-icon")
                    a.find("img.logo-size").addClass("logo-scale")
                    a.find("a").click(function () {
                        return false
                    })
                    break;
                default:
                    a.find("img.type-logo").remove()
            }
            $("div#nav3").append(a)
        })
    })
})