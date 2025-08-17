# Prueba Técnica Offcorss - Jhon Byron Quiroz Perez

Este proyecto es una solución para la prueba técnica de Offcorss.  
Consiste en una aplicación React que consume una API pública de usuarios, permite buscar por nombre y muestra los resultados en tarjetas animadas y responsivas.

---

## Estructura del Proyecto

```
solucion/
├── public/
│   └── ... (archivos estáticos y manifest)
├── src/
│   ├── App.jsx         # Componente principal, lógica y renderizado
│   ├── App.css         # Estilos globales, animaciones y responsividad
│   ├── components/
│   │   └── UserCard.jsx # Tarjeta reutilizable para mostrar usuarios
│   └── ... (archivos de configuración y utilidades)
├── package.json        # Dependencias y scripts
└── README.md           # Este documento
```

---

## ¿Cómo funciona la aplicación?

1. **Carga de usuarios:**  
   Al iniciar, la app realiza una petición a la API [jsonplaceholder](https://jsonplaceholder.typicode.com/users) usando `fetch` y `AbortController` para manejar cancelaciones si el componente se desmonta.

2. **Barra de búsqueda:**  
   Permite filtrar usuarios por nombre en tiempo real. El filtro es insensible a mayúsculas/minúsculas y espacios.

3. **Tarjetas animadas:**  
   Cada usuario se muestra en una tarjeta (`UserCard`) con animaciones de hover y variantes de color.  
   Las tarjetas son accesibles y responsivas.

4. **Animación de fondo:**  
   El fondo de la app tiene una animación suave usando CSS puro, mejorando la experiencia visual.

5. **Estados de carga y error:**  
   Mientras se carga la API, se muestra un mensaje de "Cargando...".  
   Si ocurre un error, se muestra un mensaje accesible.

6. **Accesibilidad y buenas prácticas:**  
   - Etiquetas y roles ARIA para lectores de pantalla.
   - `label` oculto visualmente para la barra de búsqueda.
   - Navegación por teclado en tarjetas.
   - Respeto por usuarios que prefieren menos animaciones (`prefers-reduced-motion`).

---

## ¿Cómo ejecutar el proyecto?

1. **Instalación de dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```
   La app estará disponible en [http://localhost:3000](http://localhost:3000).



---

## Detalles técnicos y decisiones

- **React + Hooks:**  
  Toda la lógica está basada en hooks (`useState`, `useEffect`) para mantener el código limpio y moderno.

- **CSS puro y optimizado:**  
  Los estilos están en `App.css`, usando variables CSS, animaciones y media queries para responsividad y accesibilidad.

- **Componentización:**  
  El componente `UserCard` es reutilizable y admite variantes visuales.

- **Performance:**  
  El filtrado es eficiente y la animación de fondo no afecta el rendimiento.

---

## Accesibilidad y Responsividad

- **Mobile-first:**  
  El diseño se adapta a cualquier tamaño de pantalla.
- **Accesibilidad:**  
  Roles, etiquetas y navegación por teclado implementados.
- **Animaciones:**  
  Se respetan las preferencias del usuario para reducir movimiento.

---

## Personalización

- Puedes cambiar la fuente de datos modificando la URL en `App.jsx`.
- Los estilos y animaciones pueden ajustarse fácilmente en `App.css`.

---

## Autor

**Jhon Byron Quiroz Perez**  
[LinkedIn](https://www.linkedin.com/in/jhon-quiroz/) | [Portafolio](https://jhonbyronquiroz.com/)

---
![demo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjITfopdvFBGOyDvovy1I921eVQfR4coeYgVOPiXSzd_xLunnS9jFRztxbkE2WlEEBN-Y7k9bie5-sWLXtDE8YwLG8kiM-qqgrlFdKQ0LG2IMcRmaOlcClnZOqoOza-6C6kfaN99E13JyGtqgPmvaELXSLtER1PqR5RoQMW-LId74jeSG-NpFJpGHdscPc/s320/Untitled%20design.gif)
