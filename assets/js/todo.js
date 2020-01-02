$("ul").on("click", "li", function() {
    $(this).css("text-decoration", "line-through")
});

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    });
});

$("input[type='text'").keypress(function(event) {
    if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todo + "</li>")
    }
})