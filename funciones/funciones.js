/* ===========================================
   Nombre de la función JavaScript: initSite
   Descripción: Inicializa comportamientos comunes en todas las páginas.
   =========================================== */
function initSite() {
  setCurrentYear();
  marcarMenuActivo();
}

/* ===========================================
   Nombre de la función JavaScript: setCurrentYear
   Descripción: Inserta el año actual en el <span id="year"> del footer.
   =========================================== */
function setCurrentYear() {
  var spanYear = document.getElementById('year');
  if (spanYear) {
    spanYear.textContent = new Date().getFullYear();
  }
}

/* ===========================================
   Nombre de la función JavaScript: marcarMenuActivo
   Descripción: Resalta en el menú el enlace de la página actual.
   =========================================== */
function marcarMenuActivo() {
  var nav = document.getElementById('nav-principal');
  if (!nav) return;

  var enlaces = nav.querySelectorAll('a');
  var actual = location.pathname.split('/').pop() || 'index.html';

  enlaces.forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === actual) {
      a.classList.add('active'); // en tu CSS puedes estilizar .active
    }
  });
}

/* ===========================================
   Nombre de la función JavaScript: mostrarBienvenida
   Descripción: Muestra un mensaje de bienvenida (ejemplo).
   =========================================== */
function mostrarBienvenida() {
  alert('¡Bienvenido/a a la Feria de Viajes 2025! Explora destinos, eventos y hoteles recomendados.');
}

/* Ejecuta initSite cuando el DOM está listo */
document.addEventListener('DOMContentLoaded', initSite);


/* ===========================================
   Nombre de la función JavaScript: contarDestinos
   Descripción: Cuenta cuántos destinos hay en la lista de <ul id="lista-destinos">
                y muestra el número en un alert.
   =========================================== */
function contarDestinos() {
  var lista = document.getElementById("lista-destinos");
  if (lista) {
    var total = lista.querySelectorAll("li").length;
    alert("Hay " + total + " destinos turísticos destacados en esta página.");
  }
}


/* ===========================================
   Nombre de la función JavaScript: mostrarEventoAleatorio
   Descripción: Selecciona un evento aleatorio de todos los <li> dentro de la tabla de eventos
                y lo muestra en un alert.
   =========================================== */
function mostrarEventoAleatorio() {
  var eventos = document.querySelectorAll("table ul li");
  if (eventos.length > 0) {
    var randomIndex = Math.floor(Math.random() * eventos.length);
    var eventoSeleccionado = eventos[randomIndex].textContent;
    alert("Evento destacado: " + eventoSeleccionado);
  } else {
    alert("No se encontraron eventos en la página.");
  }
}


/* ===========================================
   Nombre de la función JavaScript: resaltarHoteles
   Descripción: Agrega un borde especial a todas las imágenes de hoteles
                para resaltarlas visualmente al usuario.
   =========================================== */
function resaltarHoteles() {
  var imagenes = document.querySelectorAll(".hoteles-grid img");
  imagenes.forEach(function(img) {
    img.style.border = "4px solid gold";
    img.style.borderRadius = "8px";
  });
  alert("Se han resaltado los hoteles destacados.");
}



/* ===========================================
   Nombre de la función JavaScript: validarFormulario
   Descripción: Valida los campos del formulario de contacto 
                comprobando que no estén vacíos y que el correo 
                tenga un formato correcto antes de enviar.
   =========================================== */
function validarFormulario() {
  let nombre = document.getElementById("fname").value.trim();
  let correo = document.getElementById("lname").value.trim();
  let contenido = document.getElementById("subject").value.trim();

  if (nombre === "" || correo === "" || contenido === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Validación básica de correo electrónico
  let regexCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return false;
  }

  alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
  return true;
}
