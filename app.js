document.querySelectorAll('.img-section img').forEach((img) => {
    img.addEventListener('click', () => {
        anime({
            targets: img,
            scale: 1.5,                 // Escalar la imagen
            rotate: '1turn',            // Rotar la imagen 360 grados
            borderRadius: ['0%', '50%'], // Cambiar los bordes a redondeados
            duration: 1000,             // Duración total de la animación (1 segundo)
            easing: 'easeInOutExpo',    // Tipo de curva de animación
        });
    });
});