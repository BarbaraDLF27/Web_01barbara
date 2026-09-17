Objetivo: Especificar el alcance del proyecto estático.

Entregables:

Redacción en el tablero de al menos 4 a 6 historias de usuario o tarjetas de tareas claras (ej. "Como usuario quiero ver una galería de proyectos para conocer la experiencia del desarrollador").

Definición de las secciones fijas del sitio (Inicio, Sobre mí, Proyectos, Habilidades, Contacto).


Uso de IA 
gemini
promp:



<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tablero de alcance — Portafolio Gato · Hannibal</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="hero">
  <div class="mark">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="20" cy="27" rx="10" ry="8" fill="#9c8354"/>
      <ellipse cx="9" cy="15" rx="4.4" ry="5.4" fill="#9c8354"/>
      <ellipse cx="18" cy="10" rx="4.4" ry="5.4" fill="#9c8354"/>
      <ellipse cx="29" cy="11" rx="4.4" ry="5.4" fill="#9c8354"/>
    </svg>
    <span>ALCANCE DEL PROYECTO · ICINF1107</span>
  </div>
  <h1><span class="line">Expediente de alcance</span><span class="line">gato · Hannibal</span></h1>
  <p>Registro de historias de usuario y secciones fijas que definen el sitio estático personal, antes de escribir una sola línea de HTML final.</p>
</div>

<main>

  <section class="part">
    <div class="part-head">
      <h2>Historias de usuario</h2>
      <span class="count">06 registros</span>
    </div>

    <div class="dossier">
      <div class="file-row">
        <span class="id">01</span>
        <div class="content">
          <div class="who">Visitante nuevo</div>
          <p>Como visitante, quiero ver una <strong>introducción elegante</strong> en Inicio para reconocer de inmediato el estilo del desarrollador.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Inicio</span>
          <span class="prio alta">alta</span>
        </div>
      </div>

      <div class="file-row">
        <span class="id">02</span>
        <div class="content">
          <div class="who">Reclutador</div>
          <p>Como reclutador, quiero leer <strong>Sobre mí</strong> para conocer formación, motivaciones y trayectoria del desarrollador.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Sobre mí</span>
          <span class="prio alta">alta</span>
        </div>
      </div>

      <div class="file-row">
        <span class="id">03</span>
        <div class="content">
          <div class="who">Visitante curioso</div>
          <p>Como usuario, quiero explorar una <strong>galería de proyectos</strong> para conocer la experiencia práctica del desarrollador.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Proyectos</span>
          <span class="prio alta">alta</span>
        </div>
      </div>

      <div class="file-row">
        <span class="id">04</span>
        <div class="content">
          <div class="who">Reclutador técnico</div>
          <p>Como reclutador técnico, quiero ver una lista clara de <strong>habilidades</strong> para identificar rápido las tecnologías que domina.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Habilidades</span>
          <span class="prio">media</span>
        </div>
      </div>

      <div class="file-row">
        <span class="id">05</span>
        <div class="content">
          <div class="who">Contacto interesado</div>
          <p>Como visitante interesado, quiero encontrar los <strong>datos de contacto</strong> para poder comunicarme fácilmente.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Contacto</span>
          <span class="prio">media</span>
        </div>
      </div>

      <div class="file-row">
        <span class="id">06</span>
        <div class="content">
          <div class="who">Usuario móvil</div>
          <p>Como usuario en dispositivo móvil, quiero que el sitio se <strong>adapte a mi pantalla</strong> para navegar sin perder legibilidad.</p>
        </div>
        <div class="tagcol">
          <span class="sect">Transversal</span>
          <span class="prio alta">alta</span>
        </div>
      </div>
    </div>
  </section>

  <section class="part">
    <div class="part-head">
      <h2>Secciones fijas del sitio</h2>
      <span class="count">05 planos</span>
    </div>

    <div class="blueprint">
      <div class="plan">
        <span class="idx">01</span>
        <h3>Inicio</h3>
        <p>Primer contacto visual: nombre, frase de presentación y la dirección estética gato + Hannibal del sitio.</p>
      </div>
      <div class="plan">
        <span class="idx">02</span>
        <h3>Sobre mí</h3>
        <p>Breve biografía: formación en Ingeniería Informática, intereses y motivación detrás del portafolio.</p>
      </div>
      <div class="plan">
        <span class="idx">03</span>
        <h3>Proyectos</h3>
        <p>Galería o listado de trabajos realizados, con descripción breve y tecnología asociada a cada uno.</p>
      </div>
      <div class="plan">
        <span class="idx">04</span>
        <h3>Habilidades</h3>
        <p>Listado de lenguajes, herramientas y tecnologías que el desarrollador maneja o está aprendiendo.</p>
      </div>
      <div class="plan">
        <span class="idx">05</span>
        <h3>Contacto</h3>
        <p>Medios para comunicarse con el desarrollador: correo, redes o formulario simple.</p>
      </div>
    </div>
  </section>

</main>

<footer>
  Alcance del proyecto estático — HTML5 semántico · CSS3 responsivo · JavaScript vanilla · Despliegue en GitHub Pages.
</footer>

</body>
</html>