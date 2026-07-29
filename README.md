# app de turismo y cultura "Nica Go"

Aplicación interactiva móvil nativa basada en geolocalización que centraliza y proporciona información histórica, cultural y turística de Nicaragua.

---

# Arquitectura Técnica

El proyecto sigue una arquitectura estructurada para garantizar rendimiento y escalabilidad:
**Frontend (Cliente):** El sistema se desarrollará bajo un enfoque móvil nativo utilizando React Native y Expo para la generación del archivo instalable (.apk).
**Base de Datos:** Base de datos NoSQL escalable.
**Seguridad:** Autenticación segura mediante Firebase, almacenando las contraseñas de forma encriptada.

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

Variables de Entorno

Para que el proyecto funcione localmente, crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:
API_KEY=tu_firebase_api_key
AUTH_DOMAIN=tu_proyecto.firebaseapp.com
PROJECT_ID=tu_proyecto_id

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

# Ejemplos de Endpoints (API REST)

A continuación se detallan ejemplos teóricos de peticiones al servidor para el consumo de datos:

1. Obtener Sitios Turísticos
   Método: GET
   Ruta: /api/v1/lugares
   Descripción: Retorna la lista de puntos de interés turístico. Permite filtrar por categorías como Historia, Naturaleza o Cultura.

Ejemplo de Petición:
GET /api/v1/lugares?categoria=Historia

Ejemplo de Respuesta (JSON):
{
"status": "success",
"data": [
{
"id": "tur-001",
"nombre": "Sitio Histórico",
"categoria": "Historia",
"coordenadas": {"lat": 12.435, "lng": -86.878}
}
]
}

2. Publicar una Reseña
   Método: POST
   Ruta: /api/v1/resenas
   Descripción: Permite a un usuario autenticado enviar una calificación (1 a 5 estrellas) y un comentario sobre un lugar visitado.

Cuerpo de la Petición (JSON):
{
"usuario_id": "usr-992",
"lugar_id": "tur-001",
"calificacion": 5,
"comentario": "Excelente experiencia cultural."
}
