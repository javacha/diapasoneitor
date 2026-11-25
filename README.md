# Diapasoneitor

Aplicación mínima para dibujar acordes o escalas sobre un diapasón de guitarra orientado para zurdos.

## Requisitos

- Node.js 22 o posterior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Astro mostrará la URL local, normalmente `http://localhost:4321`.

## Compilar

```bash
npm run build
npm run preview
```

## Git

Inicializa el repositorio si todavía no existe:

```bash
git init
git add .
git commit -m "Initial Diapasoneitor app"
```

Crea un repositorio remoto y sube el proyecto:

```bash
git remote add origin <URL-DEL-REPOSITORIO>
git branch -M main
git push -u origin main
```

## Desplegar en Vercel

### Desde la web

1. Accede a Vercel e importa el repositorio de Git.
2. Selecciona Astro como framework detectado.
3. Conserva `npm run build` como comando de compilación y `dist` como directorio de salida.
4. Pulsa **Deploy**.

### Desde CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

Los diagramas se guardan únicamente en `localStorage` del navegador.
