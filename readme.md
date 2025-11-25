# Fundación NovaVida DBT1 - Plataforma Web & Tienda Solidaria

> **Enfocada en facilitar el acceso a tecnologías y educación para niños con Diabetes Tipo 1.**

![Tecnologías](https://img.shields.io/badge/Stack-HTML_|_CSS_|_JS_|_Bootstrap-blue)

## Descripción del Proyecto

Este repositorio aloja el código fuente del sitio web oficial de la **Fundación NovaVida DBT1**. El proyecto nace con la misión de crear un ecosistema digital que centralice información médica, consejos de cuidado diario y últimas investigaciones sobre la Diabetes Tipo 1.

Además, integra una **Tienda Solidaria (E-commerce)** completamente funcional, diseñada para recaudar fondos mediante la venta de insumos médicos, permitiendo a los usuarios gestionar un carrito de compras persistente.

## Tecnologías y Recursos Empleados

El desarrollo se centró en el uso de tecnologías web estándar y librerías modernas para garantizar compatibilidad y rapidez.

### Frontend & Diseño

- **HTML5 Semántico:** Estructura optimizada para SEO y accesibilidad (uso de `<nav>`, `<header>`, `<main>`, `<footer>`).
- **CSS:** Hojas de estilo personalizadas (`styles.css` y `nih_styles.css`) para la identidad de marca.
- **Bootstrap 5.3.3:** Framework principal utilizado para:
  - Sistema de Grillas (Grid System) para la maquetación de productos.
  - Componentes interactivos (Modales, Carruseles, Acordeones).
  - Diseño _Mobile-First_ (Adaptable a móviles y tablets).
- **Bootstrap Icons:** Librería de iconografía vectorial para elementos de UI (Carrito, Usuario, Redes Sociales).

### Lógica & Programación

- **JavaScript:** Manejo de lógica del lado del cliente.
  - **LocalStorage API:** Implementación de persistencia de datos. Permite que el carrito de compras "recuerde" los productos seleccionados incluso si el usuario cambia de página o recierra el navegador.
  - **JSON Manipulation:** Serialización y deserialización de objetos para el almacenamiento de datos del carrito.
- **jQuery 3.7.1:** Librería utilizada para simplificar la manipulación del DOM:
  - Validaciones de formularios en tiempo real.
  - Efectos visuales (`slideToggle`, `fadeIn`).
  - Manejo de eventos dinámicos.

### Herramientas de Desarrollo

- **Visual Studio Code:** Editor de código fuente.
- **Git & GitHub:** Control de versiones y flujo de trabajo (Commits, Ramas `main`).
- **GitHub Pages:** Despliegue e infraestructura de hosting.

## Funcionalidades Clave

### 1. Módulo de E-Commerce (Tienda Solidaria)

El sitio cuenta con un flujo de compra completo simulado:

- **Catálogo Interactivo:** Visualización de productos en tarjetas con efectos _hover_.
- **Páginas de Detalle (PDP):** Vistas individuales (`index11.html`, `12`, `13`) para cada producto con información técnica detallada.
- **Carrito Inteligente:**
  - Cálculo automático de totales.
  - Badge de notificación en el menú (contador rojo).
  - Gestión de cantidades y eliminación de ítems.
  - **Persistencia:** Los datos se guardan en la memoria local del navegador.

### 2. Formulario de Contacto Validado

Sistema robusto de validación utilizando **Expresiones Regulares (Regex)** para asegurar la calidad de los datos:

- Validación de formato de correo electrónico.
- Restricción de caracteres en nombres y apellidos.
- Contador de caracteres en tiempo real para el mensaje.

### 3. Navegación y UX

- **Menú Responsivo:** Barra de navegación colapsable para dispositivos móviles.
- **Modales Informativos:** Uso de ventanas emergentes para mostrar detalles de productos sin recargar la página ("Quick View").
- **Botón "Ir Arriba":** Funcionalidad de _smooth scroll_ para mejorar la experiencia en páginas largas.

## Estructura de Archivos

El proyecto sigue una arquitectura organizada para facilitar el mantenimiento:

```text
/ (Raíz)
├── index.html          # Página Principal (Home)
├── Index2.html         # Sección "Sobre Nosotros"
├── Index3.html         # Sección "Investigaciones"
├── Index4.html         # Sección "Pregúntale a Casanova"
├── Index5-8.html       # Secciones educativas (Diabetes, Nutrición, etc.)
├── index10.html        # Portada de la Tienda Solidaria
├── index11-13.html     # Páginas de detalle de productos específicos
├── README.md           # Documentación del proyecto
└── assets/
    ├── css/            # Hojas de estilo (styles.css, nih_styles.css)
    ├── img/            # Recursos gráficos optimizados
    └── js/             # Scripts (jquery, bootstrap.bundle, scripts propios)

## Autor

    Anael Arturo Casanova Gutiérrez
    Desarrollado como parte del portafolio de desarrollo web Full Stack.

```
