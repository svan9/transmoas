let update = (func) => {
    func(null);
    window.addEventListener("resize", e => func());
};

let centerIndent = (element) => {
    let halfElement = Number.parseInt($(element).css("width").replace("px", "")) / 2;
    let clientWidth = document.body.clientWidth;
    $(element).css("left", (clientWidth / 2) - halfElement);
};
let centerIndentByEl = (element) => {
    let halfElement = Number.parseInt($(element).css("width").replace("px", "")) / 2;
    let clientWidth = document.body.clientWidth;
    $(element).css("left", (clientWidth / 2) - halfElement);
};
let centerIndentByElement = (element, byElement) => {   
    let halfElement = Number.parseInt($(element).css("width").replace("px", "")) / 2;
    let byElementWidth = Number.parseInt($(byElement).css("width").replace("px", ""));
    // let clientWidth = document.body.clientWidth;
    $(element).css("left", (byElementWidth / 2) - halfElement);
};
let centerIndentByElementArray = (array, byElement) => {
    array.forEach(element => {
        console.log($.css(element, "width"))
        let halfElement = Number.parseInt($.css(element, "width").replace("px", "")) / 2;
        let byElementWidth = Number.parseInt($(byElement).css("width").replace("px", ""));
        // let clientWidth = document.body.clientWidth;
        $(element).css("left", (byElementWidth / 2) - halfElement);
    });
};
let centerIndentArray = (array) => {
    array.forEach(element => {
        let halfElement = Number.parseInt($.css(element,"width").replace("px", "")) / 2;
        let clientWidth = document.body.clientWidth;
        element.css("left", (clientWidth / 2) - halfElement);
    });
};

let center = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.tagName.toLowerCase() != "script")
           if (e.getAttribute("center") != null) {
                let halfElement = Number.parseInt($(e).css("width").replace("px", "")) / 2;
                let clientWidth = document.body.clientWidth;
                $(e).css({"left": (clientWidth / 2) - halfElement, "position": "absolute"});
           }
    });
}
let fullcenter = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.tagName.toLowerCase() != "script")
           if (e.getAttribute("center") != null) {
                let halfElement = Number.parseInt($(e).css("width").replace("px", "")) / 2;
                let clientWidth = document.body.clientWidth;
                $(e).css({"left": (clientWidth / 2) - halfElement, "position": "absolute"});

                let halfElementHeight = Number.parseInt($(e).css("height").replace("px", "")) / 2;
                $(e).css({"top": `calc(50vh - ${halfElementHeight}px)`, "position": "absolute"});
           }
    });
}
let fullcenterwidth = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.tagName.toLowerCase() != "script")
           if (e.getAttribute("center") != null) {
                let halfElement = Number.parseInt($(e).css("width").replace("px", "")) / 2;
                let clientWidth = document.body.clientWidth;
                $(e).css({"left": (clientWidth / 2) - halfElement, "position": "absolute"});
           }
    });
}

let getCookie = name => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let stringToHTML = function (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

let setCookie = (name, value, options = {}) => {

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

let deleteCookie = name => {
    setCookie(name, "", {
        'max-age': -1
    })
}

let sendrs = (url, data, success) => {
  $.ajax({
    global: false,
    type: 'POST',
    url: url,
    dataType: 'html',
    data: data,
    success: (res, req) => {
      success(res, req);
    },
    error: (request, error) => {}
  });
}
let getrs = (url, success) => {
  $.ajax({
    url: url,
    dataType: 'text',
    success: (data) => {
      success(data);
    }
  });
}
