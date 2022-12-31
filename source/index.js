const fullcenterwidth = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.tagName.toLowerCase() != "script")
           if (e.getAttribute("center") != null) {
                let halfElement = Number.parseInt($(e).css("width").replace("px", "")) / 2;
                let clientWidth = document.body.clientWidth;
                $(e).css({"left": (clientWidth / 2) - halfElement, "position": "absolute"});
           }
    });
}
const func = () => {
    if ($(window).width() > 570) fullcenterwidth();
};
func();
window.addEventListener("resize", e => func());

/**
 * @param {string} url 
 * @param {function (CSV)} success 
 */
function getrs(url, success) {
    $.ajax({
      url: url,
      dataType: 'text',
      success: (data) => {
        success(data.parseCSV());
      }
    });
}

$("textarea").each(function () {
    if ($(window).width() <= 570)
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("input", function () {
    if ($(window).width() <= 570) {
        $("textarea").css("height", 0);
        $("textarea").css("height", `${this.scrollHeight}px`);
    }
});

if ($(window).width() <= 570) {
    if ($("textarea[name=in]").val() == '') {
        $("textarea[name=in]").css("border-radius", "0px 0px 10px 10px");
        $("textarea[name=out]").css("display", "none");
    }
    else {
        $("textarea[name=in]").css("border-radius", "0px 0px 0px 0px");
        $("textarea[name=out]").css("display", "block");
    }
} 

$("textarea[name=in]").on("input", event => { 
    if ($(window).width() <= 570) {
        if ($("textarea[name=in]").val() == '') {
            $("textarea[name=in]").css("border-radius", "0px 0px 10px 10px");
            $("textarea[name=out]").css("display", "none");
        }
        else {
            $("textarea[name=in]").css("border-radius", "0px 0px 0px 0px");
            $("textarea[name=out]").css("display", "block");
        }
    } 
    let state = $("#switcher").attr("state");
    // to moas
    if (state == "toRus") 
        getrs("./source/words.csv", data => {
            const words = CSV.modernSplit($("textarea[name=in]").val());
            var fullString = "";
            words.forEach(e => {
                let str = data.getString({title: "moas", value: e});
                if (Array.from(",.?!@#$%^&*()}{][\/\\").indexOf(e) > -1)
                    fullString += e;
                    else if (str[0] == undefined)
                    fullString += CSV.transToRus(e);
                    else
                    fullString += str[1];
                    
                });
            $("textarea[name=out]").val(fullString);
        });
        // to rus
        else if (state == "toMoas") 
            getrs("./source/words.csv", data => {
                const words = CSV.modernSplit($("textarea[name=in]").val());
                var fullString = "";
                words.forEach(e => {
                    let str = data.getString({title: "rus", value: e});
                    if (Array.from(",.?!@#$%^&*()}{][\/\\").indexOf(e) > -1)
                        fullString += e;
                    else if (str[0] == undefined)
                        fullString += CSV.transToEng(e);
                    else
                        fullString += str[0];
                });
                $("textarea[name=out]").val(fullString);
            });
        
});
    $("#switcher").on("mousedown", (e) => {
        if (e.detail > 1) {
            e.preventDefault();
    }
});
$("#switcher .button").on("click", e => {
    let state = $("#switcher").attr("state");
    // to moas
    if (state == "toRus") {
        changeFavicon("./source/svg/icon-c.ico");
        $("#switcher").css("flex-direction", "row-reverse");
        $("#switcher").attr("state", "toMoas");
        $("textarea[name=in]").attr("placeholder", "как дела?");
    }
    // to rus
    else if (state == "toMoas") {
        changeFavicon("./source/svg/icon-wb.ico");
        $("#switcher").css("flex-direction", "row");
        $("#switcher").attr("state", "toRus");
        $("textarea[name=in]").attr("placeholder", "uis coke redume");
    }
});

function changeFavicon(src) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = src;
}


