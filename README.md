# 🍋 Little Lemon Restaurant - Table Reservation App

Este proyecto es la aplicación de reservas de mesas para el restaurante ficticio **Little Lemon**, desarrollado como proyecto final (Capstone) para la **Meta Front-End Developer Specialization**.

El proyecto demuestra la construcción de una Single Page Application (SPA) interactiva utilizando React, enfocándose en la experiencia de usuario (UX), el manejo de estados complejos y las pruebas unitarias.

## ✨ Características Principales

- **Diseño de Interfaz Personalizado:** Implementación de un diseño UI/UX propio creado en Figma, utilizando un esquema de colores en modo oscuro con acentos verdes para mejorar el contraste y la accesibilidad.
- **Flujo de Reserva de Múltiples Pasos:** Experiencia de usuario fluida sin recargas de página, guiando al usuario desde la selección de fecha/hora hasta la confirmación visual de éxito.
- **Gestión de Estado Compleja:** Uso avanzado de `useReducer` y `useEffect` en React para manejar la disponibilidad dinámica de los horarios de reserva basados en la fecha seleccionada.
- **Validación de Formularios Nativa:** Implementación de validaciones HTML5 para garantizar la integridad de los datos del cliente antes de enviar la reserva.
- **Integración de Mock API:** Simulación de llamadas a una base de datos externa para obtener horas disponibles y procesar la confirmación de la reserva.
- **Pruebas Unitarias (Unit Testing):** Entorno de pruebas configurado con Jest y React Testing Library para asegurar el correcto renderizado de componentes y la lógica del estado.

## 🛠️ Tecnologías Utilizadas

- **React.js:** Librería principal para la construcción de la interfaz (Hooks, Props, State, Componentes modulares).
- **CSS3:** Estilos puros modulares con CSS Grid, Flexbox y Variables nativas para el diseño responsivo y animaciones fluidas.
- **HTML5:** Marcado semántico y validaciones de formulario.
- **Jest & React Testing Library:** Para la validación de la lógica del Reducer y el renderizado del DOM.

## 🚀 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente en tu máquina:

1. **Clona el repositorio:**
   ```bash
   git clone <tu-enlace-de-github-aqui>
   Navega al directorio del proyecto:
   ```

Bash
cd capstone-project
Instala las dependencias:

Bash
npm install
Inicia el servidor de desarrollo:

Bash
npm start
La aplicación se abrirá automáticamente en http://localhost:3000.

🧪 Ejecución de Pruebas (Tests)
Para verificar que la lógica del Reducer y la renderización de los componentes funcionan correctamente según los requisitos del proyecto, ejecuta:

Bash
npm test
(Presiona la tecla a en la terminal para correr todas las pruebas).

👨‍💻 Autor
Johan Vasquez Front-end Developer & Systems Engineer
