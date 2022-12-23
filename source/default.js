const check_svg = `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="50" fill="#4CAF50"/><g filter="url(#filter0_d_1_12)"><path d="M79 131.077L116.579 168L182.579 102" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_1_12" x="65" y="92" width="131.579" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_12"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_12" result="shape"/></filter></defs></svg>`;
const close_svg = `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="50" fill="#B84141"/><g filter="url(#filter0_d_1_13)"><path d="M180 76L76 179M76 76L180 179" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_1_13" x="62" y="66" width="132" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_13"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_13" result="shape"/></filter></defs></svg>`;
const normal_svg = `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="50" fill="#242936"/></svg>`;
const show_svg = `<svg viewBox="0 0 517 325" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_17_16" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.3478 165.559C50.1162 186.797 71.0371 210.484 99.0459 231.585C130.756 255.475 170.439 275.197 213.66 284.111C256.749 292.997 303.235 291.137 349.242 272.137C392.634 254.218 436.612 220.632 477.264 164.487C430.533 105.297 384.547 70.4403 341.404 52.2231C296.056 33.0754 252.783 31.8497 213.133 41.3323C137.285 59.4719 73.926 117.118 38.3478 165.559ZM355.018 19.9796C407.583 42.1747 460.861 84.5376 512.959 153.446C517.494 159.443 517.69 167.666 513.448 173.874C467.603 240.958 415.885 282.483 362.602 304.487C309.328 326.488 255.626 328.502 206.59 318.389C157.686 308.303 113.306 286.15 77.9855 259.54C42.8658 233.081 15.5766 201.353 2.03306 171.163C-0.46105 165.603 0.116501 159.146 3.55775 154.117C40.546 100.064 113.28 29.226 204.992 7.29229C251.321 -3.78754 302.267 -2.29452 355.018 19.9796ZM258.5 236C299.093 236 332 203.093 332 162.5C332 121.907 299.093 89 258.5 89C217.907 89 185 121.907 185 162.5C185 203.093 217.907 236 258.5 236ZM258.5 271C318.423 271 367 222.423 367 162.5C367 102.577 318.423 54 258.5 54C198.577 54 150 102.577 150 162.5C150 222.423 198.577 271 258.5 271ZM212.5 146.5C202.835 146.5 195 154.335 195 164C195 173.665 202.835 181.5 212.5 181.5H301.5C311.165 181.5 319 173.665 319 164C319 154.335 311.165 146.5 301.5 146.5H212.5Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M38.3478 165.559C50.1162 186.797 71.0371 210.484 99.0459 231.585C130.756 255.475 170.439 275.197 213.66 284.111C256.749 292.997 303.235 291.137 349.242 272.137C392.634 254.218 436.612 220.632 477.264 164.487C430.533 105.297 384.547 70.4403 341.404 52.2231C296.056 33.0754 252.783 31.8497 213.133 41.3323C137.285 59.4719 73.926 117.118 38.3478 165.559ZM355.018 19.9796C407.583 42.1747 460.861 84.5376 512.959 153.446C517.494 159.443 517.69 167.666 513.448 173.874C467.603 240.958 415.885 282.483 362.602 304.487C309.328 326.488 255.626 328.502 206.59 318.389C157.686 308.303 113.306 286.15 77.9855 259.54C42.8658 233.081 15.5766 201.353 2.03306 171.163C-0.46105 165.603 0.116501 159.146 3.55775 154.117C40.546 100.064 113.28 29.226 204.992 7.29229C251.321 -3.78754 302.267 -2.29452 355.018 19.9796ZM258.5 236C299.093 236 332 203.093 332 162.5C332 121.907 299.093 89 258.5 89C217.907 89 185 121.907 185 162.5C185 203.093 217.907 236 258.5 236ZM258.5 271C318.423 271 367 222.423 367 162.5C367 102.577 318.423 54 258.5 54C198.577 54 150 102.577 150 162.5C150 222.423 198.577 271 258.5 271ZM212.5 146.5C202.835 146.5 195 154.335 195 164C195 173.665 202.835 181.5 212.5 181.5H301.5C311.165 181.5 319 173.665 319 164C319 154.335 311.165 146.5 301.5 146.5H212.5Z" fill="black"/> <path d="M99.0459 231.585L99.6476 230.786L99.6476 230.786L99.0459 231.585ZM38.3478 165.559L37.5418 164.967L37.1626 165.483L37.4731 166.044L38.3478 165.559ZM213.66 284.111L213.458 285.09L213.458 285.09L213.66 284.111ZM349.242 272.137L348.861 271.213L348.861 271.213L349.242 272.137ZM477.264 164.487L478.074 165.073L478.518 164.461L478.049 163.867L477.264 164.487ZM341.404 52.2231L341.015 53.1443L341.015 53.1443L341.404 52.2231ZM213.133 41.3323L213.366 42.3049L213.366 42.3049L213.133 41.3323ZM512.959 153.446L513.757 152.843L513.757 152.843L512.959 153.446ZM355.018 19.9796L355.407 19.0584L355.407 19.0584L355.018 19.9796ZM513.448 173.874L512.623 173.31L512.623 173.31L513.448 173.874ZM362.602 304.487L362.22 303.563L362.22 303.563L362.602 304.487ZM206.59 318.389L206.792 317.41L206.792 317.41L206.59 318.389ZM77.9855 259.54L77.3838 260.338L77.3838 260.338L77.9855 259.54ZM2.03308 171.163L1.12068 171.572L1.12068 171.572L2.03308 171.163ZM3.55776 154.117L4.38304 154.682L4.38304 154.682L3.55776 154.117ZM204.992 7.29226L205.225 8.26484L204.992 7.29226ZM99.6476 230.786C71.7249 209.75 50.9088 186.165 39.2225 165.074L37.4731 166.044C49.3236 187.43 70.3493 211.218 98.4442 232.384L99.6476 230.786ZM213.862 283.131C170.803 274.251 131.255 254.598 99.6476 230.786L98.4442 232.384C130.258 256.351 170.075 276.142 213.458 285.09L213.862 283.131ZM348.861 271.213C303.061 290.127 256.781 291.983 213.862 283.131L213.458 285.09C256.717 294.012 303.409 292.147 349.624 273.062L348.861 271.213ZM476.454 163.901C435.895 219.919 392.057 253.374 348.861 271.213L349.624 273.062C393.212 255.061 437.33 221.346 478.074 165.073L476.454 163.901ZM341.015 53.1443C383.968 71.2812 429.826 106.016 476.48 165.107L478.049 163.867C431.24 104.579 385.126 69.5993 341.793 51.3018L341.015 53.1443ZM213.366 42.3049C252.825 32.8679 295.879 34.0859 341.015 53.1443L341.793 51.3018C296.234 32.0648 252.742 30.8314 212.9 40.3597L213.366 42.3049ZM39.1538 166.151C74.6526 117.818 137.831 60.3696 213.366 42.3049L212.9 40.3597C136.739 58.5742 73.1995 116.418 37.5418 164.967L39.1538 166.151ZM513.757 152.843C461.582 83.8326 408.173 41.3383 355.407 19.0584L354.629 20.9009C406.993 43.0111 460.141 85.2425 512.162 154.049L513.757 152.843ZM514.274 174.438C518.759 167.876 518.55 159.183 513.757 152.843L512.162 154.049C516.437 159.703 516.622 167.457 512.623 173.31L514.274 174.438ZM362.983 305.412C416.475 283.321 468.338 241.655 514.274 174.438L512.623 173.31C466.869 240.26 415.295 281.645 362.22 303.563L362.983 305.412ZM206.388 319.368C255.594 329.517 309.502 327.498 362.983 305.412L362.22 303.563C309.154 325.478 255.658 327.488 206.792 317.41L206.388 319.368ZM77.3838 260.338C112.808 287.026 157.322 309.249 206.388 319.368L206.792 317.41C158.05 307.357 113.805 285.273 78.5872 258.741L77.3838 260.338ZM1.12068 171.572C14.7524 201.959 42.1725 233.811 77.3838 260.338L78.5872 258.741C43.5592 232.351 16.4008 200.747 2.94548 170.753L1.12068 171.572ZM2.73249 153.552C-0.905401 158.869 -1.51595 165.694 1.12068 171.572L2.94548 170.753C0.593886 165.511 1.13843 159.423 4.38304 154.682L2.73249 153.552ZM204.76 6.31969C112.719 28.3317 39.8009 99.382 2.73249 153.552L4.38304 154.682C41.2911 100.746 113.84 30.1201 205.225 8.26484L204.76 6.31969ZM355.407 19.0584C302.444 -3.30513 251.279 -4.80576 204.76 6.31969L205.225 8.26484C251.363 -2.76937 302.089 -1.28396 354.629 20.9009L355.407 19.0584ZM331 162.5C331 202.541 298.541 235 258.5 235V237C299.645 237 333 203.645 333 162.5H331ZM258.5 90C298.541 90 331 122.459 331 162.5H333C333 121.355 299.645 88 258.5 88V90ZM186 162.5C186 122.459 218.459 90 258.5 90V88C217.355 88 184 121.355 184 162.5H186ZM258.5 235C218.459 235 186 202.541 186 162.5H184C184 203.645 217.355 237 258.5 237V235ZM366 162.5C366 221.871 317.871 270 258.5 270V272C318.975 272 368 222.975 368 162.5H366ZM258.5 55C317.871 55 366 103.129 366 162.5H368C368 102.025 318.975 53 258.5 53V55ZM151 162.5C151 103.129 199.129 55 258.5 55V53C198.025 53 149 102.025 149 162.5H151ZM258.5 270C199.129 270 151 221.871 151 162.5H149C149 222.975 198.025 272 258.5 272V270ZM196 164C196 154.887 203.387 147.5 212.5 147.5V145.5C202.283 145.5 194 153.782 194 164H196ZM212.5 180.5C203.387 180.5 196 173.112 196 164H194C194 174.217 202.283 182.5 212.5 182.5V180.5ZM301.5 180.5H212.5V182.5H301.5V180.5ZM318 164C318 173.112 310.613 180.5 301.5 180.5V182.5C311.717 182.5 320 174.217 320 164H318ZM301.5 147.5C310.613 147.5 318 154.887 318 164H320C320 153.782 311.717 145.5 301.5 145.5V147.5ZM212.5 147.5H301.5V145.5H212.5V147.5Z" fill="black" mask="url(#path-1-inside-1_17_16)"/></svg>`;
const hide_svg = `<svg viewBox="0 0 516 424" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M395.543 91.8865L376.691 121.38C409.115 141.646 442.742 171.842 476.764 214.934C436.112 271.08 392.134 304.665 348.742 322.585C311.446 337.987 273.835 342.126 237.974 338.406L217.202 370.904C263.18 378.535 312.824 375.285 362.102 354.935C415.385 332.93 467.103 291.405 512.948 224.321C517.191 218.114 516.994 209.89 512.459 203.893C473.878 152.863 434.649 116.391 395.543 91.8865ZM156.781 402.854L148.745 415.425C143.54 423.568 132.719 425.95 124.575 420.745C116.432 415.54 114.05 404.719 119.255 396.575L148.482 350.848C122.287 339.817 98.3116 325.677 77.4855 309.987C42.3658 283.528 15.0766 251.801 1.53308 221.61C-0.961034 216.05 -0.383483 209.593 3.05776 204.564C40.046 150.511 112.78 79.6732 204.492 57.7395C244.447 48.184 287.836 47.9799 332.856 62.3923L367.255 8.57517C372.46 0.43158 383.281 -1.95047 391.425 3.25471C397.594 7.19769 400.456 14.3633 399.22 21.1465L159.255 396.575C157.993 398.55 157.176 400.682 156.781 402.854ZM249.046 321.083C251.999 321.324 254.985 321.447 258 321.447C317.923 321.447 366.5 272.87 366.5 212.947C366.5 193.475 361.37 175.201 352.389 159.402L329.389 195.386C330.768 201.013 331.5 206.895 331.5 212.947C331.5 248.738 305.918 278.555 272.041 285.108L249.046 321.083ZM212.633 91.7796C244.141 84.2442 277.936 83.4708 313.242 93.0788L300.463 113.071C287.421 107.519 273.069 104.447 258 104.447C198.077 104.447 149.5 153.024 149.5 212.947C149.5 244.856 163.274 273.548 185.201 293.401L167.643 320.872C142.143 310.755 118.729 297.238 98.5459 282.032C70.5371 260.931 49.6162 237.245 37.8478 216.006C73.4261 167.565 136.785 109.919 212.633 91.7796ZM204.447 263.29L224.748 231.529L212.586 231.937C202.927 232.261 194.834 224.693 194.51 215.033C194.186 205.374 201.754 197.281 211.414 196.957L247.622 195.743L281.213 143.188C273.917 140.761 266.112 139.447 258 139.447C217.407 139.447 184.5 172.354 184.5 212.947C184.5 232.427 192.078 250.137 204.447 263.29Z" fill="black"/></svg>`;

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

let transliterate = word => {
    var answer = ""
      , a = {};
   a["Ё"]="YO";a["Й"]="I";a["Ц"]="TS";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";a["Ш"]="SH";a["Щ"]="SCH";a["З"]="Z";a["Х"]="H";a["Ъ"]="'";
   a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="'";
   a["Ф"]="F";a["Ы"]="I";a["В"]="V";a["А"]="А";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";a["Д"]="D";a["Ж"]="ZH";a["Э"]="E";
   a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="zh";a["э"]="e";
   a["Я"]="Ya";a["Ч"]="CH";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="'";a["Б"]="B";a["Ю"]="YU";
   a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="'";a["б"]="b";a["ю"]="yu";
   for (i in word){
     if (word.hasOwnProperty(i)) {
       if (a[word[i]] === undefined){
         answer += word[i];
       } else {
         answer += a[word[i]];
       }
     }
   }
   return answer;
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


// let rsq = (url, data, success, error) => {
//      $('#userName').on("input", function(event) {
//         event.preventDefault();
//         $.ajax({
//             global: false,
//             type: 'POST',
//             url: url,
//             dataType: 'html',
//             data: data,
//             success: success,  
//             error: error (request, error)
//         });
//     });
// }