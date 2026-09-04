import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function EventsScreen({ navigation }) {
  const [eventos, setEventos] = useState([
    {
      id: "1",
      titulo: "Feria Gastronómica",
      fecha: "15 Oct • Parque Central, León",
      imagen: require("../assets/feria.webp"),
    },
    {
      id: "2",
      titulo: "Hackathon Nicaragua",
      fecha: "20 Oct • Centro de Convenciones",
      imagen: require("../assets/hackathon.webp"),
    },
  ]);

  const renderTarjeta = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.imagen} style={styles.cardImg} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.titulo}</Text>
        <Text style={styles.cardSubtitle}>{item.fecha}</Text>
      </View>
      <FontAwesome5 name="chevron-right" size={16} color="#D49A36" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#D49A36", "#111A3A"]} style={styles.header}>
        <Text style={styles.headerTitle}>Agenda Cultural</Text>
      </LinearGradient>

      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjeta}
        contentContainerStyle={styles.listContainer}
      />

      {/* Menú inferior: Eventos activo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MapRoute")}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="#999" />
          <Text style={styles.navText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesome5 name="home" size={24} color="#999" />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Favorites")}
        >
          <MaterialIcons name="favorite" size={26} color="#999" />
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="calendar-alt" size={24} color="#df9e28" />
          <Text style={[styles.navText, styles.navTextActive]}>Eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
  listContainer: { padding: 20, paddingBottom: 100 },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImg: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: "#DDD",
  },
  cardInfo: { flex: 1 },
  cardTitle: {
    fontSize: 18,
    color: "#111A3A",
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardSubtitle: { fontSize: 12, color: "#666", fontWeight: "600" },
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
