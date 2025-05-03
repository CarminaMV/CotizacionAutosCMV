
        function calcularCotizacion() {
            const cotizacion = document.getElementById('cotizacion').value;
            const descripcion = document.getElementById('descripcion').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const porcentaje = parseFloat(document.getElementById('porcentaje').value);
            const plazo = parseInt(document.getElementById('plazo').value);

            if (!cotizacion || !descripcion || isNaN(precio) || isNaN(porcentaje) || isNaN(plazo)) {
                alert("Por favor, complete todos los campos correctamente.");
                return;
            }

            const pagoInicial = precio * (porcentaje / 100);
            const totalFinanciar = precio - pagoInicial;
            const pagoMensual = totalFinanciar / plazo;

            document.getElementById('resultado').innerHTML = `
                <p><strong>Número de Cotización:</strong> ${cotizacion}</p>
                <p><strong>Descripción del Automóvil:</strong> ${descripcion}</p>
                <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
                <p><strong>Pago Inicial:</strong> $${pagoInicial.toFixed(2)}</p>
                <p><strong>Total a Financiar:</strong> $${totalFinanciar.toFixed(2)}</p>
                <p><strong>Pago Mensual:</strong> $${pagoMensual.toFixed(2)}</p>
            `;
        }
