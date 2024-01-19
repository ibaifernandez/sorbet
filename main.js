document.addEventListener('DOMContentLoaded', function () {
    const openFormButtons = document.querySelectorAll('.open-form-button');
    const formContainer = document.querySelector('.form-container');
    const formOverlay = document.querySelector('.form-overlay');

    openFormButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            formOverlay.style.display = 'block';

            // Espera a que se aplique la propiedad display antes de agregar la clase
            setTimeout(() => {
                if (formContainer.classList.contains('form-closed')) {
                    formContainer.classList.remove('form-closed');
                }
                formContainer.classList.remove('form-close');
                formContainer.classList.add('form-open');
            }, 10);
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === formOverlay) {
            formContainer.classList.remove('form-open');
            formContainer.classList.add('form-closed');

            // Espera a que termine la animación antes de ocultar la superposición
            setTimeout(() => {
                formOverlay.style.display = 'none';
            }, 500); // 500 milisegundos, la misma duración que la animación
        }
    });
});

    // Function to scroll to the top of the page
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Show/hide the button based on scroll position
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // Show the button after scrolling down 20px from the top
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }