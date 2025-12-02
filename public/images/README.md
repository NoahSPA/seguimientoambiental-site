# Carpeta de Imágenes Públicas

Esta carpeta contiene imágenes estáticas que se pueden referenciar directamente desde HTML o CSS.

## Uso

Las imágenes en esta carpeta se sirven desde la raíz del sitio. Puedes referenciarlas así:

### En HTML/JSX:
```jsx
<img src="/images/logo.png" alt="Logo" />
```

### En CSS:
```css
.background {
  background-image: url('/images/hero-bg.jpg');
}
```

## Estructura Recomendada

```
public/images/
├── logo.png
├── hero/
│   ├── hero-image.jpg
│   └── hero-background.jpg
├── services/
│   ├── service-1.jpg
│   └── service-2.jpg
└── icons/
    └── favicon.ico
```

## Notas

- Las imágenes aquí NO son procesadas por Vite
- Úsalas para imágenes grandes o que no necesitan optimización
- El path siempre comienza con `/images/`

