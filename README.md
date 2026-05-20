# Proyecto Individual: F1 Telemetry Hub (2002-2026)

Una Single Page Application (SPA) de alto rendimiento diseñada para entusiastas y analistas de la Fórmula 1. La plataforma centraliza datos estadísticos, técnicos e históricos de la categoría reina desde la era de Schumacher hasta la futura reglamentación de 2026.

## Descripción de la Idea
El proyecto consiste en un centro de telemetría interactivo que permite navegar a través de más de dos décadas de historia de la F1. Los usuarios pueden explorar la evolución de las parrillas de pilotos, los cambios en las escuderías (incluyendo la entrada de **Audi** y **Cadillac**) y las fichas técnicas de circuitos legendarios, todo bajo una experiencia de navegación instantánea sin recargas de página.

## Problema que resuelve
Centraliza la información fragmentada de la Fórmula 1. Históricamente, consultar datos específicos de temporadas pasadas (como DNFs, vueltas rápidas o puntos de constructores) requiere navegar por múltiples sitios web estáticos. **F1 Telemetry Hub** resuelve esto mediante un Dashboard reactivo que unifica estadísticas de pilotos, constructores y circuitos en un solo lugar.

## Público Objetivo
*   **Fans de la F1:** Que buscan datos rápidos y comparativas históricas.
*   **Analistas de datos:** Interesados en la evolución del rendimiento por temporada.
*   **Desarrolladores Web:** Estudiantes y profesionales que busquen un ejemplo sólido de arquitectura SPA en React.

## Framework y Tecnologías
*   **Framework Inicial:** React 18 + Vite (Seleccionado por su velocidad de compilación y optimización de assets).
*   **Tecnologías Utilizadas:**
    *   **React Router Dom:** Gestión de enrutamiento dinámico y navegación SPA.
    *   **Context API & useReducer:** Manejo del estado global (Temporadas, filtros y caché).
    *   **Hooks Personalizados (useMemo, custom hooks):** Optimización de cálculos estadísticos.
    *   **CSS Moderno:** Diseño responsivo y visualización de telemetría.
    *   **FontAwesome:** Iconografía técnica y de competición.

## Pasos de Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/f1-telemetry-hub.git](https://github.com/tu-usuario/f1-telemetry-hub.git)
    cd f1-telemetry-hub
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    ```
    *La aplicación estará disponible en `http://localhost:5173`*

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

## Estructura del Proyecto
```text
src/
├── assets/          # Imágenes estáticas y recursos visuales.
├── components/      # Componentes reutilizables (Layout, Sidebar, Cards).
├── context/         # F1Context.jsx para el estado global de la temporada.
├── hooks/           # useSeasonStats.js y lógica de procesamiento de datos.
├── routes/          # index.jsx con la configuración de React Router.
├── services/        # f1Data.js - Motor de datos históricos y generadores.
└── views/           # Vistas principales: Dashboard, Pilotos, Equipos, Circuitos.
