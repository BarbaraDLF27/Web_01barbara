Estación 3: Diseño y Modelado


Objetivo: Visualizar y estructurar la interfaz antes de escribir código.

Entregables:

Boceto/Wireframe simple (puede ser a mano alzada digitalizado o en Figma) adjunto a las tarjetas del proyecto.

Definición de la paleta de colores, tipografías y estructura base del HTML (árbol DOM inicial).


Gemini

respuesta:

:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-card: #334155;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #38bdf8;
  --accent-hover: #0284c7;
  --font-family: system-ui, -apple-system, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-family);
  line-height: 1.6;
}

header {
  position: sticky;
  top: 0;
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--bg-card);
  z-index: 100;
}

nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--accent);
}

section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.hero {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
}

.hero h1 {
  font-size: 3rem;
  line-height: 1.1;
}

.hero h1 span {
  color: var(--accent);
}

.hero p {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
}

.btn-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--accent);
  color: var(--bg-primary);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
}

.btn-secondary {
  border: 1px solid var(--accent);
  color: var(--accent);
  background-color: transparent;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background-color: var(--accent);
  margin-top: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--bg-card);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: var(--bg-card);
  color: var(--accent);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.card-links {
  display: flex;
  gap: 1rem;
}

.card-links a {
  color: var(--text-main);
  font-size: 0.875rem;
  text-decoration: none;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.skill-item {
  background-color: var(--bg-secondary);
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
  border: 1px solid var(--bg-card);
}

.contact-form {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  background-color: var(--bg-secondary);
  border: 1px solid var(--bg-card);
  color: var(--text-main);
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-family: inherit;
}

footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--bg-card);
  color: var(--text-muted);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.25rem;
  }
  .nav-links {
    display: none;
  }
}