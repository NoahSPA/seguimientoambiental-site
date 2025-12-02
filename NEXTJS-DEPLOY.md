# 🚀 Despliegue Next.js en Netlify

El proyecto ha sido migrado a **Next.js 14** con exportación estática para Netlify.

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## 🛠️ Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará en http://localhost:3000
```

## 🏗️ Build de Producción

```bash
# Generar build estático
npm run build

# El sitio estático se genera en la carpeta 'out/'
```

## 🚀 Deploy en Netlify

### Configuración Automática

El archivo `netlify.toml` ya está configurado:

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** 18

### Pasos para Deploy

#### Opción 1: Desde Git (Recomendado)

1. **Subir código a Git:**
   ```bash
   git add .
   git commit -m "Migrate to Next.js"
   git push
   ```

2. **En Netlify:**
   - Ve a [app.netlify.com](https://app.netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Conecta tu repositorio
   - Netlify detectará automáticamente la configuración desde `netlify.toml`
   - Click en "Deploy site"

#### Opción 2: Drag & Drop

1. **Generar build local:**
   ```bash
   npm run build
   ```

2. **En Netlify:**
   - Arrastra la carpeta `out` a Netlify
   - ¡Listo!

## 📁 Estructura del Proyecto

```
seguimientoambiental-site/
├── app/
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── public/
│   ├── images/            # Imágenes estáticas
│   ├── logo.png
│   └── isotipo.png
├── next.config.js         # Configuración Next.js
├── netlify.toml           # Configuración Netlify
└── package.json
```

## ⚙️ Configuración Next.js

- **Output:** `export` (sitio estático)
- **Images:** `unoptimized: true` (para Netlify)
- **DistDir:** `out` (carpeta de salida)

## 🔍 Diferencias con Vite

- **Carpeta de build:** `out` (en lugar de `dist`)
- **Componentes:** Usan `'use client'` para interactividad
- **Imágenes:** Rutas desde `/` (public folder)
- **Routing:** Next.js App Router

## ✅ Checklist de Deploy

- [ ] `npm install` ejecutado
- [ ] `npm run build` funciona localmente
- [ ] Carpeta `out/` generada
- [ ] Imágenes en `public/`
- [ ] `netlify.toml` configurado
- [ ] Deploy en Netlify completado

## 🐛 Solución de Problemas

### Build falla

```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Imágenes no cargan

- Verifica que las imágenes estén en `public/`
- Las rutas deben ser `/images/nombre.jpg` (con `/` al inicio)

### Error en Netlify

- Verifica que `publish directory` sea `out`
- Revisa los logs de build en Netlify

---

**¡Tu sitio Next.js está listo para desplegar! 🎉**

