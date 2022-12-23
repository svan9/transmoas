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
    fullcenterwidth();
};
func();
window.addEventListener("resize", e => func());

/**
 * 
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




// txt
$("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        $("textarea").css("height", 0);
        $("textarea").css("height", (this.scrollHeight) + "px");
});

$("textarea[name=in]").on("input", event => {    
    getrs("./source/words.csv", data => {
        const words = CSV.modernSplit($("textarea[name=in]").val());
        var fullString = "";
        words.forEach(e => {
            let str = data.getString({title: "moas", value: e});
            if (Array.from(",.?!@#$%^&*()}{][\/\\").indexOf(e) > -1)
                fullString += e;
            else if (str[0] == undefined)
                fullString +=  " " + CSV.transToRus(e);
            else
                fullString +=  " " + str[1];
        });
        $("textarea[name=out]").val(fullString);
    });
});

// cookie
const getCookie = name => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
const stringToHTML = function (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

const setCookie = (name, value, options = {}) => {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}

const deleteCookie = name => {
    setCookie(name, "", {
        'max-age': -1
    })
}