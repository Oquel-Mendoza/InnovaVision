# app de turismo(tenemos que definir un nombre)

Aplicación interactiva móvil nativa basada en geolocalización que centraliza y proporciona información histórica, cultural y turística de Nicaragua.

---

# Arquitectura Técnica

El proyecto sigue una arquitectura estructurada para garantizar rendimiento y escalabilidad:
**Frontend (Cliente):** El sistema se desarrollará bajo un enfoque móvil nativo utilizando React Native y Expo para la generación del archivo instalable (.apk).
**Base de Datos:** Base de datos NoSQL escalable.
**Seguridad:** Autenticación segura mediante Firebase, almacenando las contraseñas de forma encriptada.
**Servidor:** Backend compatible con servidores Linux.

---

# Dependencias Principales

Las herramientas y librerías clave necesarias para cumplir con los requisitos funcionales incluyen:

- `react-native` y `expo`: Core del desarrollo.
- `expo-location`: Porque el sistema solicitará permisos de ubicación (GPS) al dispositivo del usuario.
- `react-native-maps`: Para mostrar un mapa interactivo centralizado en la ubicación actual del usuario.
- `expo-av` (o similar): Ya que el sistema reproducirá contenido multimedia (imágenes y videos) dentro de la ficha de información.

---

# Estructura Modular

El proyecto está organizado de forma modular para separar responsabilidades:

/src
├── /assets # Imágenes y archivos multimedia
├── /components # Componentes visuales
├── /screens # Pantallas (Mapas, Perfil, Agenda de eventos)
├── /navigation # Enrutamiento de la aplicación
└── /services # Conexión con Firebase

---

# Scripts de Ejecución

Instalar las dependencias del proyecto:

```bash
npm install
```

Iniciar el servidor de desarrollo de Expo:

```bash
npx expo start
```

Presiona la tecla "a" en la terminal para abrir en Android, o escanea el código QR con la app Expo Go.
