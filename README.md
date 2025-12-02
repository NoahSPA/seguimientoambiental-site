# Seguimiento Ambiental - Landing Page

Landing page profesional para **seguimientoambiental.cl**, una plataforma de monitoreo y cumplimiento ambiental en Chile.

## 🚀 Características

- ✅ **Diseño Moderno y Responsive**: Funciona perfectamente en móviles, tablets y desktop
- ✅ **Sección de Benchmarking**: Comparativa detallada con competidores del mercado
- ✅ **Paleta de Colores Diferenciada**: Azul índigo con acentos, evitando verdes genéricos
- ✅ **Componentes Modulares**: Estructura React reutilizable y mantenible
- ✅ **Optimización SEO**: Meta tags y estructura semántica HTML
- ✅ **Animaciones Sutiles**: Transiciones suaves y efectos visuales modernos

## 📦 Tecnologías

- **React 18**: Framework de UI
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Estilos utility-first
- **Lucide React**: Iconos modernos
- **PostCSS & Autoprefixer**: Procesamiento de CSS

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ y npm (o yarn/pnpm)

### Pasos

1. **Instalar dependencias**:
```bash
npm install
```

2. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

3. **Abrir en el navegador**:
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la build de producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter de ESLint

## 📁 Estructura del Proyecto

```
seguimientoambiental-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación principal
│   │   ├── Hero.jsx             # Sección hero principal
│   │   ├── Features.jsx         # Características de la plataforma
│   │   ├── Benchmarking.jsx     # Comparativa con competidores
│   │   ├── CTA.jsx              # Call to action y formulario
│   │   └── Footer.jsx           # Pie de página
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── index.html                   # HTML base
├── tailwind.config.js           # Configuración de Tailwind
├── vite.config.js               # Configuración de Vite
└── package.json                 # Dependencias del proyecto
```

## 🎨 Paleta de Colores

La paleta utiliza tonos azul índigo como color principal, diferenciándose del mercado ambiental tradicional:

- **Primary**: Azul índigo (`#6b6ef2` - `#211f4d`)
- **Accent**: Rojo coral (`#f55141` - `#460f09`)
- **Neutral**: Grises modernos para texto y fondos

## 📱 Componentes Principales

### Header
Navegación fija con menú responsive y efecto de scroll.

### Hero
Sección principal con valor proposicional, estadísticas y CTAs.

### Features
Grid de 8 características principales con iconos y descripciones.

### Benchmarking
Tabla comparativa con competidores del mercado (ECOS Chile, Sustentable S.A., GISMA).

### CTA
Formulario de contacto y múltiples opciones de comunicación.

### Footer
Información de contacto, enlaces y redes sociales.

## 🔧 Personalización

### Modificar Colores

Edita `tailwind.config.js` para cambiar la paleta:

```javascript
colors: {
  primary: { /* tus colores */ },
  accent: { /* tus colores */ }
}
```

### Agregar Competidores

Edita `src/components/Benchmarking.jsx` y agrega nuevos competidores al array `competitors`.

### Modificar Contenido

Todos los textos están directamente en los componentes. Busca y reemplaza según necesites.

## 📄 SEO

- Meta tags en `index.html`
- Estructura semántica HTML5
- Títulos y descripciones optimizados
- URLs amigables con anclas

## 🚢 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Despliegue en Netlify

#### Opción 1: Deploy Automático desde Git (Recomendado)

1. **Preparar el repositorio:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repositorio>
   git push -u origin main
   ```

2. **En Netlify:**
   - Ve a [netlify.com](https://www.netlify.com) y crea una cuenta
   - Click en "Add new site" → "Import an existing project"
   - Conecta tu repositorio (GitHub, GitLab o Bitbucket)
   - Netlify detectará automáticamente la configuración desde `netlify.toml`
   - Build command: `npm run build` (ya configurado)
   - Publish directory: `dist` (ya configurado)
   - Click en "Deploy site"

3. **Configurar dominio personalizado (opcional):**
   - En Netlify: Site settings → Domain management
   - Agrega tu dominio `seguimientoambiental.cl`
   - Sigue las instrucciones para configurar DNS

#### Opción 2: Deploy Manual (Drag & Drop)

1. **Generar build local:**
   ```bash
   npm run build
   ```

2. **En Netlify:**
   - Ve a [netlify.com](https://www.netlify.com)
   - Arrastra la carpeta `dist` a la zona de deploy
   - ¡Listo! Tu sitio estará en línea

#### Configuración Automática

El archivo `netlify.toml` ya está configurado con:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects para SPA (Single Page Application)
- Node version: 18

## 📝 Notas

- El formulario de contacto requiere backend para funcionar completamente
- Los enlaces sociales y algunos enlaces del footer están como placeholders
- Las estadísticas pueden ajustarse según datos reales
- **La página está lista para desplegar en Netlify** - Ver `NETLIFY-DEPLOY.md` para instrucciones detalladas

## 📬 Contacto

Para más información sobre el proyecto, contacta a través de:
- Email: contacto@seguimientoambiental.cl
- Teléfono: +56 9 1234 5678

---

**Desarrollado con ❤️ para seguimientoambiental.cl**
