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

    // Recalcular al hacer clic (limpiamos el evento primero)
    $("#navbarSupportedContent").off("click", "li").on("click", "li", function () {
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
    console.log('Cargando página:', pageUrl);

    // Asegurarnos de que el main-content tenga position: relative
    $('#main-content').css('position', 'relative');
    
    // Crear el loader si no existe
    if ($('#content-loader').length === 0) {
        $('#main-content').append(`
            <div id="content-loader" class="content-loader">
                <div class="spinner"></div>
            </div>
            <style>
                .content-loader {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid #f3f3f3;
                    border-top: 5px solid #3498db;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `);
    }
    
    // Mostrar el loader
    $('#content-loader').show();
    const startTime = new Date().getTime();
    
    // Cargar contenido
    $('#main-content').load(pageUrl + ' #main-content > *', function(response, status) {
        if (status === 'error') {
            console.error('Error al cargar la página:', pageUrl);
            $('#content-loader').hide();
            return;
        }
        
        // Volver a añadir el loader si fue eliminado
        if ($('#content-loader').length === 0) {
            $('#main-content').append(`
                <div id="content-loader" class="content-loader" style="display: block;">
                    <div class="spinner"></div>
                </div>
                <style>
                    .content-loader {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 9999;
                    }
                    .spinner {
                        width: 50px;
                        height: 50px;
                        margin: auto;
                        margin-top: 20%;
                        border: 5px solid #f3f3f3;
                        border-top: 5px solid #3498db;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `);
        }
        
        // Mostrar el loader por al menos 2 segundos
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const minTime = 2000; // 2 segundos
        
        setTimeout(function() {
            $('#content-loader').fadeOut(300);
            
            // IMPORTANTE: Actualizar la navegación
            $('.nav-item').removeClass('active');
            $('.nav-link[href="#' + page + '"]').parent().addClass('active');
            test(); // Recalcular posición del indicador
        }, Math.max(0, minTime - elapsedTime));
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

    // Navegación con hash - ESTA ES LA PARTE CRÍTICA
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