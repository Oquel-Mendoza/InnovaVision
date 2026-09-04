import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  // Datos de ejemplo para maquetar la interfaz
  const categorias = [
    { id: "1", nombre: "Historia", icono: "landmark" },
    { id: "2", nombre: "Naturaleza", icono: "leaf" },
    { id: "3", nombre: "Playas", icono: "water" },
    { id: "4", nombre: "Aventura", icono: "hiking" },
  ];

  const destacados = [
    {
      id: "1",
      nombre: "León Colonial",
      imagen: require("../assets/Catedral.webp"),
    },
    {
      id: "2",
      nombre: "Volcán Masaya",
      imagen: require("../assets/volcan.webp"),
    },
    {
      id: "3",
      nombre: "Isla de Ometepe",
      imagen: require("../assets/ometepe.webp"),
    },
  ];

  const rutas = [
    {
      id: "1",
      titulo: "Ruta de los Volcanes",
      duracion: "2 días • 3 destinos",
      icono: "fire",
    },
    {
      id: "2",
      titulo: "Tour del Café",
      duracion: "1 día • Jinotega",
      icono: "coffee",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Contenido scrolleable */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cabecera con saludo y perfil */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hola, Alejandra 👋</Text>
            <Text style={styles.subtitle}>¿Qué descubriremos hoy?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
              }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>

        {/* Barra de Búsqueda */}
        <View style={styles.searchBar}>
          <FontAwesome5
            name="search"
            size={16}
            color="#152145"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Cual es tu proximo destino?"
            placeholderTextColor="#64748B"
            style={[styles.searchInput, { outlineStyle: "none" }]}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* Categorías Rápidas */}
        <Text style={styles.sectionTitle}>Explorar por</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {categorias.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryBadge}>
              <FontAwesome5 name={cat.icono} size={16} color="#D49A36" />
              <Text style={styles.categoryText}>{cat.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Destinos Destacados */}
        <Text style={styles.sectionTitle}>Destinos Destacados</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {destacados.map((dest) => (
            <TouchableOpacity
              key={dest.id}
              style={styles.destacadoCard}
              onPress={() => navigation.navigate("CityDetail")}
            >
              <Image source={dest.imagen} style={styles.destacadoImg} />
              <View style={styles.destacadoOverlay}>
                <Text style={styles.destacadoTitle}>{dest.nombre}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Rutas Sugeridas */}
        <Text style={styles.sectionTitle}>Rutas Sugeridas</Text>
        {rutas.map((ruta) => (
          <TouchableOpacity key={ruta.id} style={styles.rutaCard}>
            <View style={styles.rutaIconContainer}>
              <FontAwesome5 name={ruta.icono} size={20} color="#FFF" />
            </View>
            <View style={styles.rutaInfo}>
              <Text style={styles.rutaTitle}>{ruta.titulo}</Text>
              <Text style={styles.rutaSubtitle}>{ruta.duracion}</Text>
            </View>
            <FontAwesome5 name="chevron-right" size={16} color="#D49A36" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Menú inferior: Inicio activo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MapRoute")}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="#999" />
          <Text style={styles.navText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="home" size={24} color="#df9e28" />
          <Text style={[styles.navText, styles.navTextActive]}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Favorites")}
        >
          <MaterialIcons name="favorite" size={26} color="#999" />
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Events")}
        >
          <FontAwesome5 name="calendar-alt" size={24} color="#999" />
          <Text style={styles.navText}>Eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  scrollContent: { paddingTop: 60, paddingBottom: 100 }, // El paddingBottom evita que el menú tape el contenido
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 25,
  },
  greeting: { fontSize: 24, fontWeight: "bold", color: "#111A3A" },
  subtitle: { fontSize: 16, color: "#64748B", marginTop: 4 },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#D49A36",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 25,
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 30,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#111A3A" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111A3A",
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  horizontalScroll: { paddingLeft: 25, paddingBottom: 25 },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#111A3A",
  },
  destacadoCard: {
    width: 160,
    height: 220,
    borderRadius: 20,
    marginRight: 20,
    overflow: "hidden",
    position: "relative",
  },
  destacadoImg: { width: "100%", height: "100%", resizeMode: "cover" },
  destacadoOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(17, 26, 58, 0.6)",
    justifyContent: "flex-end",
    padding: 15,
  },
  destacadoTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  rutaCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 25,
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  rutaIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#111A3A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  rutaInfo: { flex: 1 },
  rutaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111A3A",
    marginBottom: 4,
  },
  rutaSubtitle: { fontSize: 13, color: "#64748B", fontWeight: "600" },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navText: { fontSize: 10, fontWeight: "600", color: "#999", marginTop: 4 },
  navTextActive: { color: "#df9e28" },
});
