$.get(SERVERROOTPATH + "header-all.html", function (data) {
    $('#header-all').append(data);
    updateLinks();
});
$.get(SERVERROOTPATH + "my-footer.html", function (data) {
    $('#footer').append(data);
    updateLinks();
});

// function updateLinks() {
//     $("a").each(function () {
//         var x = $(this).attr('href');
//         if (typeof x != 'undefined') {
//             if (x.indexOf(".html") >= 0 && x.indexOf("http\:\/\/") < 0 && x.indexOf("https\:\/\/") < 0) {
//                 $(this).attr('href', SERVERROOTPATH + x);
//             }
//         }
//     });
// }