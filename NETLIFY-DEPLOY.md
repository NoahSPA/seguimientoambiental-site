# 🚀 Guía de Despliegue en Netlify

Esta guía te ayudará a desplegar tu landing page de Seguimiento Ambiental en Netlify.

## ✅ Pre-requisitos

- Cuenta en Netlify (gratis): [netlify.com](https://www.netlify.com)
- Repositorio Git (GitHub, GitLab o Bitbucket) - Opcional pero recomendado

## 📦 Opción 1: Deploy desde Git (Recomendado)

### Paso 1: Subir código a Git

```bash
# Si aún no tienes repositorio Git
git init
git add .
git commit -m "Initial commit - Landing page Seguimiento Ambiental"

# Conectar con repositorio remoto (GitHub, GitLab, etc.)
git remote add origin <URL-de-tu-repositorio>
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Netlify

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Selecciona tu proveedor de Git (GitHub, GitLab, Bitbucket)
4. Autoriza Netlify y selecciona tu repositorio
5. Netlify detectará automáticamente la configuración desde `netlify.toml`

### Paso 3: Configuración (Ya está configurada automáticamente)

Netlify usará estos valores del archivo `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

### Paso 4: Deploy

1. Click en **"Deploy site"**
2. Espera a que termine el build (2-3 minutos)
3. ¡Tu sitio estará en línea! Obtendrás una URL como: `https://random-name-123.netlify.app`

## 📤 Opción 2: Deploy Manual (Drag & Drop)

### Paso 1: Generar build local

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Generar build de producción
npm run build
```

### Paso 2: Subir a Netlify

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Arrastra la carpeta `dist` a la zona de deploy en Netlify
3. ¡Listo! Tu sitio estará en línea

## 🌐 Configurar Dominio Personalizado

### Paso 1: Agregar dominio en Netlify

1. En tu sitio de Netlify, ve a **Site settings** → **Domain management**
2. Click en **"Add custom domain"**
3. Ingresa tu dominio: `seguimientoambiental.cl`
4. Netlify te dará instrucciones para configurar DNS

### Paso 2: Configurar DNS

Tienes dos opciones:

#### Opción A: Usar DNS de Netlify (Recomendado)

1. En Netlify, ve a **Domain management** → **DNS**
2. Sigue las instrucciones para cambiar los nameservers en tu registrador de dominio
3. Netlify manejará todo automáticamente

#### Opción B: Configurar registros DNS manualmente

Agrega estos registros en tu proveedor de DNS:

```
Tipo: A
Nombre: @
Valor: 75.2.60.5

Tipo: CNAME
Nombre: www
Valor: tu-sitio.netlify.app
```

### Paso 3: SSL Automático

Netlify proporciona SSL/HTTPS automáticamente. Solo espera unos minutos después de configurar el dominio.

## 🔄 Deploy Automático

Una vez conectado con Git, cada vez que hagas `git push`, Netlify:
1. Detectará los cambios automáticamente
2. Ejecutará el build
3. Desplegará la nueva versión

## 🐛 Solución de Problemas

### Build falla

1. Verifica que `package.json` tenga todas las dependencias
2. Revisa los logs de build en Netlify
3. Prueba el build localmente: `npm run build`

### Página en blanco

1. Verifica que el `publish directory` sea `dist`
2. Asegúrate de que `netlify.toml` tenga los redirects correctos
3. Revisa la consola del navegador para errores

### Imágenes no cargan

1. Verifica que las imágenes estén en `public/images/`
2. Las rutas deben ser `/images/nombre.jpg` (con `/` al inicio)

## 📊 Monitoreo y Analytics

Netlify ofrece:
- **Analytics básico** (gratis): Visitas, páginas vistas
- **Analytics Pro** (de pago): Más métricas detalladas

Para habilitar:
1. Ve a **Site settings** → **Analytics**
2. Activa la opción que necesites

## 🔒 Variables de Entorno (Si las necesitas)

Si en el futuro necesitas variables de entorno:

1. Ve a **Site settings** → **Environment variables**
2. Agrega tus variables
3. Reinicia el deploy

## ✅ Checklist Final

- [ ] Código subido a Git (si usas Opción 1)
- [ ] Build local funciona: `npm run build`
- [ ] Sitio desplegado en Netlify
- [ ] Dominio configurado (opcional)
- [ ] SSL activo (automático)
- [ ] Todas las imágenes cargan correctamente
- [ ] Formulario de contacto funciona (requiere backend)
- [ ] Enlaces del footer actualizados

## 📞 Soporte

- Documentación Netlify: [docs.netlify.com](https://docs.netlify.com)
- Comunidad: [community.netlify.com](https://community.netlify.com)

---

**¡Tu landing page está lista para el mundo! 🎉**

