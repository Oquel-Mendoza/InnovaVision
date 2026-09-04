import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

// La lista completa de departamentos que tenías originalmente
const destinosTuristicos = [
  { id: "1", nombre: "Boaco", lat: 12.4722, lng: -85.6586 },
  { id: "2", nombre: "Carazo", lat: 11.85, lng: -86.199 },
  { id: "3", nombre: "Chinandega", lat: 12.6294, lng: -87.131 },
  { id: "4", nombre: "Chontales", lat: 12.1063, lng: -85.3645 },
  { id: "5", nombre: "Estelí", lat: 13.0918, lng: -86.3536 },
  { id: "6", nombre: "Granada", lat: 11.9344, lng: -85.956 },
  { id: "7", nombre: "Jinotega", lat: 13.0878, lng: -86.0022 },
  { id: "8", nombre: "León", lat: 12.4378, lng: -86.878 },
  { id: "9", nombre: "Madriz", lat: 13.4808, lng: -86.5821 },
  { id: "10", nombre: "Managua", lat: 12.1363, lng: -86.2513 },
  { id: "11", nombre: "Masaya", lat: 11.9744, lng: -86.0941 },
  { id: "12", nombre: "Matagalpa", lat: 12.9256, lng: -85.9113 },
  { id: "13", nombre: "Nueva Segovia", lat: 13.6321, lng: -86.4752 },
  { id: "14", nombre: "Rivas", lat: 11.4371, lng: -85.8263 },
  { id: "15", nombre: "Río San Juan", lat: 11.1236, lng: -84.7779 },
  { id: "16", nombre: "Caribe Norte", lat: 14.0291, lng: -83.3898 },
  { id: "17", nombre: "Caribe Sur", lat: 12.0137, lng: -83.7635 },
];

export default function MapRouteScreen({ navigation }) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 12.1363,
    longitude: -86.2513,
    latitudeDelta: 3.0,
    longitudeDelta: 3.0,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 1.5,
        longitudeDelta: 1.5,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Mapa interactivo restaurado con todos los marcadores */}
      <MapView style={styles.map} region={mapRegion} showsUserLocation={true}>
        {destinosTuristicos.map((destino) => (
          <Marker
            key={destino.id}
            coordinate={{ latitude: destino.lat, longitude: destino.lng }}
            onPress={() => navigation.navigate("CityDetail")}
          >
            <View style={styles.customMarker}>
              <Image
                source={require("../assets/pin.png")}
                style={styles.markerIcon}
              />
              <Text style={styles.markerText}>{destino.nombre}</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Menú inferior: Mapa activo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#df9e28" />
          <Text style={[styles.navText, styles.navTextActive]}>Mapa</Text>
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
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
  customMarker: { alignItems: "center", justifyContent: "center" },
  markerIcon: { width: 35, height: 45, resizeMode: "contain" },
  markerText: {
    color: "#111A3A",
    fontWeight: "bold",
    fontSize: 11,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
  },
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
