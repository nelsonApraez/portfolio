# 🚀 Portafolio Personal - Angular

Un portafolio web desarrollado con Angular que muestra proyectos de ejemplo y habilidades como desarrollador.

## 📋 Descripción

Este portafolio presenta una colección de proyectos de ejemplo de desarrollo web, incluyendo aplicaciones Angular, PWAs y otras tecnologías modernas. La aplicación está construida con Angular 15 y cuenta con Server Side Rendering (SSR) para optimizar el rendimiento y SEO.

## ✨ Características

- 🎨 **Interfaz moderna y responsive** - Diseño adaptable a diferentes dispositivos
- ⚡ **Server Side Rendering (SSR)** - Optimizado para SEO y rendimiento
- 🔄 **Lazy Loading** - Carga perezosa de módulos para mejor rendimiento
- 📱 **PWA Ready** - Preparado para Progressive Web App
- 🧭 **Navegación intuitiva** - Routing modular y fácil navegación
- 🎯 **Secciones principales**:
  - **Proyectos** - Showcase de aplicaciones desarrolladas
  - **Acerca de** - Información personal y profesional
  - **Contacto** - Formulario y información de contacto

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 15.2.11
- **Language**: TypeScript 4.9.4
- **Styling**: CSS3 + Bootstrap
- **Server**: Express.js
- **SSR**: Angular Universal
- **Testing**: Jasmine + Karma
- **Build Tool**: Angular CLI

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Angular CLI

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/nelsonApraez/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```
   
   La aplicación estará disponible en `http://localhost:4200/`

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:ssr` | Build con SSR |
| `npm run serve:ssr` | Servir aplicación SSR |
| `npm run dev:ssr` | Desarrollo con SSR |
| `npm test` | Ejecutar tests unitarios |
| `npm run watch` | Build en modo watch |

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── about/              # Módulo "Acerca de"
│   ├── contacto/           # Módulo de contacto
│   ├── proyectos/          # Módulo de proyectos
│   │   ├── service/        # Servicios de datos
│   │   └── informacion/    # Componente de información
│   └── shared/             # Componentes compartidos
│       ├── data/           # Datos de proyectos
│       └── components/     # Componentes reutilizables
└── assets/                 # Recursos estáticos
```

## 🎯 Proyectos Destacados

El portafolio incluye varios proyectos desarrollados:

- **Contador Angular** - Aplicación PWA para aprender eventos y reactividad
- **PokeApp** - Aplicación de Pokémon con Angular Material
- **Listado de Tareas** - Gestor de tareas con funcionalidades CRUD
- **Aplicación de Pipes** - Demostración de pipes personalizados en Angular

## 🌐 Deployment

### Build para producción
```bash
npm run build
```

### Build con SSR para mejor SEO
```bash
npm run build:ssr
npm run serve:ssr
```

Los archivos generados estarán en la carpeta `dist/`

## 🧪 Testing

Ejecutar tests unitarios:
```bash
npm test
```

El proyecto utiliza Jasmine y Karma para las pruebas unitarias.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Nelson Apráez** - Desarrollador Full Stack

- 🌐 Portfolio: [Tu sitio web]
- 📧 Email: [tu-email@ejemplo.com]
- 💼 LinkedIn: [Tu perfil de LinkedIn]
- 🐱 GitHub: [@nelsonApraez](https://github.com/nelsonApraez)

## 🔧 Herramientas de Desarrollo

Para obtener más ayuda sobre Angular CLI:
- Ejecuta `ng help`
- Visita la [Documentación de Angular CLI](https://angular.io/cli)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!
