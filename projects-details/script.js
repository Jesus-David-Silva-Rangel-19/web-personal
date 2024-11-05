document.getElementById('learnMoreBtn').addEventListener('click', function() {
    Swal.fire({
        title: 'Monitor Digital de Presión Arterial',
        text: 'MDPA permite a los usuarios realizar un seguimiento de su presión arterial en tiempo real, con alertas y gráficos personalizables.',
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#d9534f'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Inicializar AOS
});
