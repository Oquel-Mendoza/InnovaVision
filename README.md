# Nica Go - Desarrollado por Equipo InnovaVision

Aplicación interactiva móvil nativa basada en geolocalización que centraliza y proporciona información histórica, cultural y turística de Nicaragua.

## Arquitectura Técnica

El proyecto sigue una arquitectura estructurada para garantizar rendimiento y escalabilidad:

- **Frontend (Cliente):** Desarrollo bajo un enfoque móvil nativo utilizando React Native y Expo para la generación del archivo instalable (.apk).
- **Backend y Base de Datos:** Plataforma backend en Supabase, empleando una base de datos relacional PostgreSQL con un esquema normalizado bajo la Tercera Forma Normal (3FN).
- **Seguridad:** Autenticación gestionada mediante Supabase Auth, utilizando Row Level Security (RLS) para el control de acceso y almacenamiento seguro de credenciales.
- **Control de Versiones:** Trazabilidad y gestión del código fuente mediante Git y GitHub.

## Dependencias Principales

Las herramientas y librerías clave integradas para el cumplimiento de los requisitos funcionales son:

- `react-native` y `expo`: Core del desarrollo de la interfaz.
- `expo-location`: Gestión de permisos y captura de la ubicación (GPS) del dispositivo.
- `react-native-maps`: Renderizado del mapa interactivo centralizado en las coordenadas del usuario.
- `expo-av`: Reproducción de contenido multimedia dentro de las fichas de información turística.
- `@supabase/supabase-js`: Cliente para la conexión, autenticación y operaciones CRUD con PostgreSQL.

## Estructura Modular

El proyecto está organizado para separar responsabilidades lógicas y visuales:

```text
/src
 ├── /assets      # Imágenes y archivos multimedia
 ├── /components  # Componentes visuales reutilizables
 ├── /screens     # Vistas principales (Mapas, Perfil, Eventos, Home)
 ├── /navigation  # Rutas y stack de navegación de la aplicación
 └── /services    # Cliente de Supabase y peticiones a la base de datos
```

## Configuración de Entorno

El sistema requiere la configuración de variables de entorno para establecer la conexión segura con la base de datos. Genere un archivo `.env` en el directorio raíz utilizando las credenciales asignadas al proyecto:

```env
EXPO_PUBLIC_SUPABASE_URL=[URL_DEL_SERVIDOR]
EXPO_PUBLIC_SUPABASE_ANON_KEY=[CLAVE_DE_ACCESO]
```

## Despliegue de Desarrollo

Inicialice las dependencias y el servidor local ejecutando los siguientes comandos en la terminal:

```bash
npm install
npx expo start
```

_Nota: Utilice los atajos de teclado provistos por la terminal de Expo (ej. 'a' para emulador Android) o el cliente móvil Expo Go para la visualización del prototipo._

## Especificaciones de la API REST

La transferencia de datos entre el cliente y el servidor backend se estructura mediante los siguientes servicios principales:

**1. Obtener Sitios Turísticos**

- **Método:** `GET`
- **Ruta:** `/api/v1/lugares`
- **Descripción:** Retorna la lista de puntos de interés turístico. Permite parámetros de filtrado por categoría (Historia, Naturaleza, Cultura).
- **Ejemplo de Respuesta:**

```json
{
  "status": "success",
  "data": [
    {
      "id": "tur-001",
      "nombre": "Sitio Histórico",
      "categoria": "Historia",
      "coordenadas": { "lat": 12.435, "lng": -86.878 }
    }
  ]
}
```

**2. Publicar una Reseña**

- **Método:** `POST`
- **Ruta:** `/api/v1/resenas`
- **Descripción:** Permite a un usuario autenticado enviar una calificación y comentario sobre un lugar visitado.
- **Cuerpo de la Petición:**

```json
{
  "usuario_id": "usr-992",
  "lugar_id": "tur-001",
  "calificacion": 5,
  "comentario": "Excelente experiencia cultural."
}
```
