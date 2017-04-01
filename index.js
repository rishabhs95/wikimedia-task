$("document").ready(function() {
    $('#txt').keypress(function(e) {
        if (e.keyCode == 13)
            $('#butt').click();
    });

    $("#butt").click(function() {
        $(".results").empty();
        word = $("#txt").val();
        lang = $("#lang").val();
        query = word.replace(" ", "_");
        getResult(lang, query);
        toggleNavIcon();
    });

    function getResult(lang, word) {
        $.ajax({
            url: 'https://' + lang + '.wikipedia.org/api/rest_v1/page/html/' + word,
            success(data) {
                $(data).appendTo(".results");
            },
            error() {
                $("<h3 style='padding-left: 35%'>Couldn't find results. Please try again with different keyword.</h3>").appendTo(".results");
            }
        });
    }
});

function toggleNavIcon() {
    var x = document.getElementById("ham");
    if (x.className === "ham") {
        x.className += " responsive";
    } else {
        x.className = "ham";
    }
}