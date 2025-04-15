function test() {
    const activeItem = $('#navbarSupportedContent').find('.active');
    if (activeItem.length) {
        const height = activeItem.innerHeight();
        const width = activeItem.innerWidth();
        const pos = activeItem.position();

        $(".hori-selector").css({
            top: pos.top + "px",
            left: pos.left + "px",
            height: height + "px",
            width: width + "px"
        });
    }

    // Recalcular al hacer clic
    $("#navbarSupportedContent").on("click", "li", function () {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        const height = $(this).innerHeight();
        const width = $(this).innerWidth();
        const pos = $(this).position();
        $(".hori-selector").css({
            top: pos.top + "px",
            left: pos.left + "px",
            height: height + "px",
            width: width + "px"
        });
    });
}

function loadPage(page) {
    const pageUrl = page.endsWith('.html') ? page : page + '.html';
    console.log('Cargando página:', pageUrl); // Para depurar

    $('#loader').fadeIn(150);
    $('#main-content').load(pageUrl + ' #main-content > *', function () {
        $('#loader').fadeOut(300);
        $('.nav-item').removeClass('active');
        $('.nav-link[href="#' + page + '"]').parent().addClass('active');
        test(); // Recalcular posición del indicador
    });
}

$(document).ready(function () {
    setTimeout(test, 100);

    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").slideToggle(300);
        setTimeout(test, 300);
    });

    $(window).on('resize', function () {
        setTimeout(test, 500);
    });

    // Navegación con hash
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const href = $(this).attr('href').replace('#', '');
        window.location.hash = href;
    });

    // Cambios de hash (navegación + botón atrás)
    $(window).on('hashchange', function () {
        const page = window.location.hash.replace('#', '') || 'index';
        loadPage(page);
    });

    // Carga inicial
    const initialPage = window.location.hash.replace('#', '') || 'index';
    loadPage(initialPage);
});
