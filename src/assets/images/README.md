# Carpeta de Imágenes de Assets

Esta carpeta contiene imágenes que se importan directamente en componentes React y son procesadas por Vite.

## Uso

Las imágenes aquí se importan como módulos y Vite las optimiza automáticamente:

### En Componentes React:
```jsx
import logo from '@/assets/images/logo.png'
import heroImage from './assets/images/hero.jpg'

function Component() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <img src={heroImage} alt="Hero" />
    </div>
  )
}
```

### Con alias de path (si está configurado):
```jsx
import logo from '@/assets/images/logo.png'
```

## Ventajas

- ✅ Optimización automática por Vite
- ✅ Hash en nombres de archivo para cache busting
- ✅ Verificación de existencia en tiempo de compilación
- ✅ Soporte para formatos modernos (WebP, etc.)

## Estructura Recomendada

```
src/assets/images/
├── logo.png
├── icons/
│   ├── check.svg
│   └── arrow.svg
└── illustrations/
    └── hero-illustration.svg
```

## Notas

- Las imágenes aquí SÍ son procesadas y optimizadas por Vite
- Úsalas para imágenes que necesitas importar dinámicamente
- Vite genera URLs optimizadas automáticamente

