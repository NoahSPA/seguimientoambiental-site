# 🔧 Solución: Error 404 en Netlify

Si estás viendo un error 404 en Netlify, sigue estos pasos:

## ✅ Solución Rápida

### 1. Verificar que el Build se Completó

En el dashboard de Netlify:
1. Ve a tu sitio
2. Click en **"Deploys"**
3. Verifica que el último deploy tenga estado **"Published"** (verde)
4. Si hay errores, revisa los logs

### 2. Verificar Configuración de Build

En Netlify, ve a **Site settings** → **Build & deploy**:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (o superior)

### 3. Forzar Nuevo Deploy

**Opción A: Desde Git**
```bash
# Haz un pequeño cambio y push
git commit --allow-empty -m "Trigger rebuild"
git push
```

**Opción B: Desde Netlify**
1. Ve a **Deploys**
2. Click en **"Trigger deploy"** → **"Deploy site"**

### 4. Verificar Archivos Generados

El build debe generar una carpeta `dist` con:
- `index.html`
- `assets/` (con JS y CSS)
- `favicon.ico`
- `images/` (si hay imágenes en public)

## 🔍 Verificación Detallada

### Verificar que netlify.toml esté en la raíz

El archivo `netlify.toml` debe estar en la raíz del proyecto, no en una subcarpeta.

### Verificar Redirects

Netlify debe tener estos redirects configurados (ya están en `netlify.toml`):
```
/*    /index.html   200
```

También creamos `public/_redirects` como respaldo.

### Verificar Base Path

Si tu sitio está en un subdirectorio (ej: `/site`), necesitas configurar el base path en `vite.config.js`:

```js
export default defineConfig({
  base: '/',
  // ... resto de la configuración
})
```

## 🐛 Problemas Comunes

### Problema: Build falla

**Solución:**
1. Revisa los logs de build en Netlify
2. Prueba el build localmente: `npm run build`
3. Verifica que todas las dependencias estén en `package.json`

### Problema: Página en blanco

**Solución:**
1. Abre la consola del navegador (F12)
2. Revisa errores en la pestaña "Console"
3. Verifica que los assets se carguen correctamente
4. Revisa la pestaña "Network" para ver qué archivos fallan

### Problema: 404 en rutas específicas

**Solución:**
- Los redirects deben estar configurados (ya están en `netlify.toml`)
- El archivo `public/_redirects` también ayuda
- Reinicia el deploy después de agregar redirects

### Problema: Imágenes no cargan

**Solución:**
1. Verifica que las imágenes estén en `public/images/`
2. Las rutas deben ser `/images/nombre.jpg` (con `/` al inicio)
3. No uses rutas relativas como `./images/`

## 📋 Checklist de Verificación

- [ ] Build completado exitosamente en Netlify
- [ ] `netlify.toml` está en la raíz del proyecto
- [ ] `public/_redirects` existe con `/* /index.html 200`
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Node version: 18 o superior
- [ ] Último deploy tiene estado "Published"

## 🚀 Pasos para Re-Deploy

1. **Verifica el build local:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Si el build local funciona, fuerza un nuevo deploy en Netlify:**
   - Desde Git: `git commit --allow-empty -m "Rebuild" && git push`
   - O desde Netlify: Trigger deploy → Deploy site

3. **Espera a que termine el build** (2-3 minutos)

4. **Verifica el sitio** en la URL de Netlify

## 📞 Si el Problema Persiste

1. Revisa los **logs de build** en Netlify (muy importante)
2. Verifica que el **build local funcione**: `npm run build`
3. Compara la estructura de `dist` local vs la de Netlify
4. Contacta soporte de Netlify con los logs de build

---

**Nota:** El archivo `public/_redirects` es un respaldo. Netlify debería usar `netlify.toml` primero, pero `_redirects` funciona como fallback.

