$(document).ready(function(){
    $(".forma").click(function(){
        $(this).toggleClass("activo");
    });
    $(".informacion").click(function(){
        $(this).toggleClass("activo");
    });
    $(".cuartos").click(function(){
        $(".zoom").toggleClass("activo");
        $(".caja").addClass("activo");
    });
    $(".cierre").click(function(){
        $(".caja").removeClass("activo");
    });
    $(".cuartosuno").click(function(){
        $(".zoomuno").toggleClass("activo");
        $(".cajauno").addClass("activo");
    });
    $(".cierre").click(function(){
        $(".cajauno").removeClass("activo");
    });
    $(".cuartosdos").click(function(){
        $(".zoomdos").toggleClass("activo");
        $(".cajados").addClass("activo");
    });
    $(".cierre").click(function(){
        $(".cajados").removeClass("activo");
    });
    $(".cuartostres").click(function(){
        $(".zoomtres").toggleClass("activo");
        $(".cajatres").addClass("activo");
    });
    $(".cierre").click(function(){
        $(".cajatres").removeClass("activo");
    });
    $(".cuartoscuatro").click(function(){
        $(".zoomcuatro").toggleClass("activo");
        $(".cajacuatro").addClass("activo");
    });
    $(".cierre").click(function(){
        $(".cajacuatro").removeClass("activo");
    });
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".menu").toggleClass("activo");

        
    });
});



