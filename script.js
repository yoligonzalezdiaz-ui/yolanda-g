// Funcionalidad para el calendario de clases
document.addEventListener('DOMContentLoaded', function() {
    const btnSemanaAnterior = document.getElementById('semanaAnterior');
    const btnSemanaSiguiente = document.getElementById('semanaSiguiente');
    const semanaActualTexto = document.getElementById('semanaActual');

    // Fecha inicial
    let fechaActual = new Date(2026, 1, 10); // 10 de febrero de 2026

    // Función para formatear la semana
    function formatearSemana(fecha) {
        const inicio = new Date(fecha);
        const fin = new Date(fecha);
        fin.setDate(fin.getDate() + 6);

        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        const inicioTexto = inicio.getDate() + ' ' + meses[inicio.getMonth()];
        const finTexto = fin.getDate() + ' ' + meses[fin.getMonth()] + ' ' + fin.getFullYear();

        return 'Semana del ' + inicioTexto + ' - ' + finTexto;
    }

    // Actualizar texto de la semana
    function actualizarSemana() {
        semanaActualTexto.textContent = formatearSemana(fechaActual);
    }

    // Event listeners para los botones
    btnSemanaAnterior.addEventListener('click', function() {
        fechaActual.setDate(fechaActual.getDate() - 7);
        actualizarSemana();
    });

    btnSemanaSiguiente.addEventListener('click', function() {
        fechaActual.setDate(fechaActual.getDate() + 7);
        actualizarSemana();
    });

    // Smooth scroll para navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Funcionalidad para botones de cuotas
    document.querySelectorAll('.precio-button').forEach(button => {
        button.addEventListener('click', function() {
            const cuota = this.closest('.cuota-card').querySelector('h3').textContent;
            alert('¡Excelente elección! Has seleccionado la cuota ' + cuota + '.\n\nUn asesor se pondrá en contacto contigo pronto.');
        });
    });

    // Funcionalidad para botón CTA
    document.querySelector('.cta-button').addEventListener('click', function() {
        alert('¡Bienvenido a FitMax!\n\nVen a probar nuestras instalaciones gratis durante 7 días.\n\nNos vemos en el gimnasio 💪');
    });
});
