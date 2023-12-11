$(document).ready(function () {

    // hover: comparsa info chef
    $('#chef1').hover(function () {

        $('#chefInfo1').toggleClass('d-none');

    }
    );

    // background overlay on hover
    $('#chef1').hover(function () {
        // hover: backgroundImg con overlay colorato

        $('#chef1').css({
            "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(img/amaury.webp)",
            "background-size": "cover"
        }
        );

    }, function () {
        // out: backgroundImg originale
        $('#chef1').css({
            "background": "url(img/amaury.webp)",
            "background-size": "cover"
        }
        );

        }
    );


$('#chef2').hover(function () {

    $('#chefInfo2').toggleClass('d-none');

}
);

// overlay on background
$('#chef2').hover(function () {
    // hover

    $('#chef2').css({
        "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(img/cedric.webp)",
        "background-size": "cover"
    }
    );

}, function () {
    // out
    $('#chef2').css({
        "background": "url(img/cedric.webp)",
        "background-size": "cover"
    }
    );

}
);



$('#chef3').hover(function () {

    $('#chefInfo3').toggleClass('d-none');

}
);

// overlay on background
$('#chef3').hover(function () {
    // hover

    $('#chef3').css({
        "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(img/iginio.webp)",
        "background-size": "cover"
    }
    );

}, function () {
    // out
    $('#chef3').css({
        "background": "url(img/iginio.webp)",
        "background-size": "cover"
    }
    );

}
);


$('#chef4').hover(function () {

    $('#chefInfo4').toggleClass('d-none');

}
);

// overlay on background
$('#chef4').hover(function () {
    // hover

    $('#chef4').css({
        "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(img/yohann.webp)",
        "background-size": "cover"
    }
    );

}, function () {
    // out
    $('#chef4').css({
        "background": "url(img/yohann.webp)",
        "background-size": "cover"
    }
    );

}
);
})