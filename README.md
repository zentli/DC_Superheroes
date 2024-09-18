# DC Superheroes App

Esta es una aplicación de React Native que muestra una lista de superhéroes de DC. La aplicación permite buscar superhéroes, ver detalles de cada superhéroe y navegar entre diferentes pantallas.

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Git

## Instalación

### 1. Clonar el repositorio

```sh
git clone https://github.com/zentli/DC_Superheroes
cd DC_Superheroes
```

### 2. Instalar dependencias
Usa npm o yarn para instalar las dependencias del proyecto.

Con npm
```sh
npm install
```
### 3. Configurar el entorno
Asegúrate de tener Expo CLI instalado globalmente. Si no lo tienes, puedes instalarlo con el siguiente comando:

```sh
npm install -g expo-cli
```

## Ejecución

### 1. Iniciar el servidor de desarrollo de Expo

```sh
npx expo start
```

## Estructura del Proyecto

```sh
DC_Superheroes/
├── assets/                 # Archivos de recursos como imágenes y fuentes
├── components/             # Componentes reutilizables
│   ├── SuperheroCard.tsx   # Componente para mostrar la tarjeta de un superhéroe
│   └── SearchBar.tsx       # Componente de búsqueda
├── redux/                  # Configuración de Redux
│   ├── store.ts            # Configuración del store de Redux
│   ├── superheroesSlice.ts # Slice de Redux para los superhéroes
│   └── index.ts            # Exportaciones centralizadas de Redux
├── screens/                # Pantallas de la aplicación
│   ├── HomeScreen.tsx      # Pantalla principal que muestra la lista de superhéroes
│   └── DetailsScreen.tsx   # Pantalla de detalles de un superhéroe
├── types/                  # Definiciones de tipos TypeScript
│   └── index.ts            # Tipos utilizados en la aplicación
├── App.tsx                 # Componente principal de la aplicación
├── Navigation.tsx          # Configuración de la navegación
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

## Funcionalidades

- **Lista de Superhéroes**: Muestra una lista de superhéroes de DC.
- **Búsqueda**: Permite buscar superhéroes por nombre.
- **Detalles del Superhéroe**: Muestra detalles de un superhéroe seleccionado.
- **Navegación**: Navega entre la lista de superhéroes y la pantalla de detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.