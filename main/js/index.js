window.onload = () => {
}
const temp_list = `
<input name="moas" type="text" placeholder="moas">
<input name="rus" type="text" placeholder="rus">
<svg class="button" id="add" name="send">
    <image xlink:href="../icons/svg/enter.svg" width="100%" height="100%"/>
</svg>`;

let loadedit = (moas_, rus_) => {
    let el = stringToHTML(temp_list);
    el.setAttribute("class", "el-list block added");
    let moas = el.querySelector("input[name=\"moas\"]");
    let rus = el.querySelector("input[name=\"rus\"]");
    el.setAttribute("name", "edit");
    moas.setAttribute("disabled", "true");
    rus.setAttribute("disabled", "true");
    moas.style.color = "#aaa";
    rus. style.color = "#aaa";
    moas.value = moas_;
    rus.value = rus_;
    el.getElementsByTagName("svg")[0].getElementsByTagName("image")[0].setAttribute("xlink:href", "../icons/svg/edit.svg");
    el.getElementsByTagName("svg")[0].addEventListener("click", (e) => {
        if (e.currentTarget.getAttribute("name") == "send") {  
            e.target.setAttribute("xlink:href", "../icons/svg/edit.svg");
            e.currentTarget.setAttribute("name", "edit");
            sendrs("/editword", { moas: moas.value, rus: rus.value}, (res, req) => {
                console.log(res);
            });
            moas.setAttribute("disabled", "true");
            rus.setAttribute("disabled", "true");
            moas.style.color = "#aaa";
            rus. style.color = "#aaa";
        } else if (e.currentTarget.getAttribute("name") == "edit") {  
            e.target.setAttribute("xlink:href", "../icons/svg/enter.svg");
            e.currentTarget.setAttribute("name", "send");
            moas.removeAttribute("disabled");
            rus.removeAttribute("disabled");
            moas.style.color = "#fff";
            rus. style.color = "#fff";
            sendrs("/addword", { moas: moas.value, rus: rus.value}, (res, req) => {
                console.log(res);
            });
    }});
    $("#list").append(el);
}

update((e) => {
    fullcenterwidth();
});
// stringToHTML

$("svg#add.button[name=\"add\"]").on("click", e => {
    let el = stringToHTML(temp_list);
    el.setAttribute("class", "el-list block added");
    el.getElementsByTagName("svg")[0].addEventListener("click", (e) => {
        let moas = el.querySelector("input[name=\"moas\"]");
        let rus = el.querySelector("input[name=\"rus\"]");
        if (e.currentTarget.getAttribute("name") == "send") {  
            e.target.setAttribute("xlink:href", "../icons/svg/edit.svg");
            e.currentTarget.setAttribute("name", "edit");
            sendrs("/addword", { moas: moas.value, rus: rus.value}, (res, req) => {
                console.log(res);
            });
            moas.setAttribute("disabled", "true");
            rus.setAttribute("disabled", "true");
            moas.style.color = "#aaa";
            rus. style.color = "#aaa";
        } else if (e.currentTarget.getAttribute("name") == "edit") {  
            e.target.setAttribute("xlink:href", "../icons/svg/enter.svg");
            e.currentTarget.setAttribute("name", "send");
            moas.removeAttribute("disabled");
            rus.removeAttribute("disabled");
            moas.style.color = "#fff";
            rus. style.color = "#fff";
            sendrs("/editword", { moas: moas.value, rus: rus.value}, (res, req) => {
                console.log(res);
            });
        }
    });
    // el.on
    $("#list").append(el);
}); 

$("#leftArrow").on("click", e => {
    switch (getCookie("statisPage"))
    {
        case "Check":
            break;
        case "Edit":
            setCookie("statisPage", "Check");
            setTimeout(() => {window.location.reload();}, 1000);
            break;
    }
});
$("#rightArrow").on("click", e => {
    switch (getCookie("statisPage"))
    {
        case "Check":
            setCookie("statisPage", "Edit");
            setTimeout(() => {window.location.reload();}, 1000);
            break;
        case "Edit":
            break;
    }
});
// <image xlink:href="../icons/svg/enter.svg" width="100%" height="100%"/> 

$("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        $("textarea").css("height", 0);
        $("textarea").css("height", (this.scrollHeight) + "px");
});
$("textarea[name=in]").on("input", event => {
    event.preventDefault();
        $.ajax({
            global: false,
            type: 'POST',
            url: "/gettrans",
            dataType: 'html',
            data: {
                value: $("textarea[name=in]").val()
            },
            success: (res, req) => {
                $("textarea[name=out]").val(res);
            },  
            error: (request, error) => {

            }
        });
});