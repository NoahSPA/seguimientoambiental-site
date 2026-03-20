# Despliegue en Dokploy

Este proyecto incluye todo lo necesario para desplegar en [Dokploy](https://dokploy.com/). El sitio es un export estático de Next.js servido con nginx.

## Requisitos previos

- Servidor con Dokploy instalado (2GB RAM mínimo recomendado)
- Repositorio Git conectado a Dokploy

## Pasos de despliegue

### 1. Crear proyecto y aplicación

1. En el panel de Dokploy, crea un **Project**.
2. Añade una **Application** y conecta tu repositorio (GitHub, GitLab, etc.).
3. Selecciona el repositorio `seguimientoambiental-site`, rama `main` (o la que uses).

### 2. Configurar el build

1. En **Build Type**, elige **Dockerfile**.
2. Configuración:
   - **Dockerfile Path**: `Dockerfile` (está en la raíz)
   - **Docker Context Path**: `.` (punto)
3. No hace falta definir **Docker Build Stage**; se usa la etapa final por defecto.

### 3. Puerto y dominio

- La aplicación expone el **puerto 80**.
2. Crea o asocia un **dominio** (ej. `seguimientoambiental.cl`).
3. Asegúrate de que el proxy inverso de Dokploy use el puerto correcto (80).

### 4. Desplegar

1. Guarda la configuración.
2. Haz clic en **Deploy** para iniciar el build.
3. El primer despliegue puede tardar varios minutos (instalación de dependencias y build de Next.js).

## Estructura del despliegue

```
Dockerfile (multi-stage)
├── Etapa 1 (builder): Node 20 → npm ci → npm run build → genera /app/out
└── Etapa 2 (runtime): nginx:alpine → sirve /usr/share/nginx/html
```

El `output: 'export'` de Next.js genera la carpeta `out/` con HTML estático. Nginx sirve esos archivos con compresión gzip y caché para assets de `/_next/static/`.

## Variables de entorno

Este proyecto no requiere variables de entorno para el despliegue base. Si añades analytics, tracking u otras integraciones, configúralas en la pestaña **Environment Variables** de la aplicación.

## Builds remotos (opcional)

Si el servidor tiene poca RAM, puedes usar [GitHub Actions](https://docs.dokploy.com/docs/core/remote-servers/build-server) para construir la imagen y que Dokploy solo la descargue y ejecute.
