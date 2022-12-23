window.onload = () => {
}
update((e) => {
    fullcenterwidth();
}); 

getrs("./source/words.csv", data => {
    console.log(data);
});

$("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        $("textarea").css("height", 0);
        $("textarea").css("height", (this.scrollHeight) + "px");
});
// $("textarea[name=in]").on("input", event => {
//     event.preventDefault();
//         $.ajax({
//             global: false,
//             type: 'POST',
//             url: "/gettrans",
//             dataType: 'html',
//             data: {
//                 value: $("textarea[name=in]").val()
//             },
//             success: (res, req) => {
//                 $("textarea[name=out]").val(res);
//             },  
//             error: (request, error) => {

//             }
//         });
// });