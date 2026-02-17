# 05-hooks-app

Este proyecto es una aplicación de React desarrollada con Vite y TypeScript, utilizando TailwindCSS para los estilos. Su propósito es explorar y demostrar el uso de varios hooks de React.

## Características

- Aplicación React moderna.
- Desarrollado con TypeScript para una mayor robustez.
- Vite para un desarrollo rápido y eficiente.
- Estilado con TailwindCSS para un diseño responsivo y personalizable.
- Ejemplos prácticos del uso de hooks de React.

## Requisitos

Antes de empezar, asegúrate de tener Node.js y npm instalados en tu sistema.

- Node.js (v18 o superior)
- npm (v9 o superior) o Yarn (v1.22 o superior)

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/05-hooks-app.git
    cd 05-hooks-app
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

## Uso

### Ejecutar en modo desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará la aplicación en `http://localhost:5173` (o un puerto similar) y recargará automáticamente los cambios a medida que edites el código.

### Construir para producción

Para construir la aplicación para producción:

```bash
npm run build
# o
yarn build
```

Esto generará los archivos de producción optimizados en el directorio `dist/`.

### Previsualizar la construcción de producción

Para previsualizar la construcción de producción localmente:

```bash
npm run preview
# o
yarn preview
```

## Estructura del Proyecto

El proyecto sigue una estructura típica de una aplicación React con Vite:

```
.
├── public/                # Archivos estáticos
├── src/                   # Código fuente de la aplicación
│   ├── assets/            # Activos como imágenes, iconos, etc.
│   ├── components/        # Componentes reutilizables
│   ├── hooks/             # Hooks personalizados
│   ├── App.tsx            # Componente principal de la aplicación
│   ├── main.tsx           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales o de Tailwind
├── .gitignore             # Archivos y directorios a ignorar por Git
├── index.html             # Archivo HTML principal
├── package.json           # Metadatos y dependencias del proyecto
├── tailwind.config.js     # Configuración de TailwindCSS
├── tsconfig.json          # Configuración de TypeScript
└── vite.config.ts         # Configuración de Vite
```

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` (si existe) para más detalles.

---
