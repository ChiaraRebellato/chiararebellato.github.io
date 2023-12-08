
$(document).ready(function(){
    // "filtro" per la selezione del genere

    $("#displayHair").click(function () {
        $(".body, .face").hide();
        $(".hair").show();
        $("#hairDescription").removeClass("d-none");
        $("#bodyDescription").addClass("d-none");
        $("#faceDescription").addClass("d-none");
    })

    $("#displayBody").click(function () {
        $(".face, .hair").hide();
        $(".body").show();
        $("#bodyDescription").removeClass("d-none");
        $("#faceDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");
    });

    $("#displayFace").click(function () {
        $(".face").show();
        $(".body, .hair").hide();
        $("#faceDescription").removeClass("d-none");
        $("#bodyDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");

    });

    $("#displayAll").click(function () {
        $(".body, .face, .hair").show();
        $("#bodyDescription").addClass("d-none");
        $("#faceDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");
    });

})

