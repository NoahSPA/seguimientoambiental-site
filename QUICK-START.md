# 🚀 Inicio Rápido - Seguimiento Ambiental

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará en http://localhost:3000
```

## Build para Producción

```bash
# Generar build
npm run build

# Previsualizar build
npm run preview
```

## Deploy en Netlify (3 pasos)

### 1. Subir a Git (si aún no lo has hecho)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repositorio>
git push -u origin main
```

### 2. Conectar con Netlify
1. Ve a [app.netlify.com](https://app.netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Selecciona tu repositorio
4. Netlify detectará automáticamente la configuración

### 3. Deploy
- Click en "Deploy site"
- ¡Listo! Tu sitio estará en línea

**Configuración automática desde `netlify.toml`:**
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects para SPA: Configurados

## 📚 Documentación Completa

- **Guía detallada de Netlify:** Ver `NETLIFY-DEPLOY.md`
- **Checklist de deploy:** Ver `DEPLOY-CHECKLIST.md`
- **Documentación general:** Ver `README.md`

---

**¡Todo listo para desplegar! 🎉**

