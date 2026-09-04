import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen({ navigation }) {
  // Estado para controlar en qué pantalla del recorrido estamos (0 = Catedral, 1 = Mapa)
  const [paso, setPaso] = useState(0);

  // Función para avanzar
  const avanzar = () => {
    if (paso === 0) {
      setPaso(1); // Cambia a la segunda vista del recorrido
    } else {
      navigation.navigate("Login"); // Si ya está en el mapa, va al Login
    }
  };

  return (
    <LinearGradient
      colors={["#D49A36", "#111A3A"]}
      locations={[0.1, 0.55]}
      style={styles.container}
    >
      {/* La imagen cambia dependiendo del paso */}
      <Image
        source={
          paso === 0
            ? require("../assets/Catedral.webp") // Asegúrate de que esta imagen exista
            : require("../assets/mapa_ruta.png") // Asegúrate de que esta imagen exista
        }
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        {/* Los textos cambian dependiendo del paso */}
        {paso === 0 ? (
          <>
            <Text style={styles.title}>Explora Nicaragua{"\n"}fácilmente</Text>
            <Text style={styles.subtitle}>
              Descubre lugares increíbles,{"\n"}historia, cultura{"\n"}y
              gastronomía en un solo lugar.
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>Encuentra rutas{"\n"}inteligentes</Text>
            <Text style={styles.subtitle}>
              Mapas, recomendaciones y rutas personalizadas para que disfrutes
              cada momento.
            </Text>
          </>
        )}
      </View>

      <View style={styles.pagination}>
        {/* El punto blanco (activo) se mueve matemáticamente según el paso */}
        <View style={[styles.dot, paso === 0 && styles.activeDot]} />
        <View style={[styles.dot, paso === 1 && styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.button} onPress={avanzar}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 50 },
  image: { width: "85%", height: "52%", borderRadius: 40, marginBottom: 25 },
  textContainer: { alignItems: "center", paddingHorizontal: 30, height: 120 }, // Altura fija para que el botón no salte
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFF",
    textAlign: "center",
    lineHeight: 20,
  },
  pagination: { flexDirection: "row", marginTop: 25, marginBottom: 30 },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#64748B",
    marginHorizontal: 6,
  },
  activeDot: { backgroundColor: "#FFF" },
  button: {
    backgroundColor: "#0084FF",
    width: "60%",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});
