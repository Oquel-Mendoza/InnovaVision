import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CityDetailScreen() {
  const [activeTab, setActiveTab] = useState("Historia");

  return (
    <View style={styles.container}>
      {/* Usamos la imagen de la Catedral que ya tienes en tus assets */}
      <Image
        source={require("../assets/Catedral.webp")}
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Leon</Text>

        <View style={styles.tabsContainer}>
          {["Ruta", "Historia", "Fotos"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.textScroll}>
          {activeTab === "Historia" && (
            <Text style={styles.description}>
              Bienvenido a León, una ciudad donde la historia, la cultura y el
              arte se encuentran en cada rincón. Recorre sus calles, descubre
              sus monumentos más emblemáticos y vive una experiencia única
              mientras exploras todo lo que León tiene para ofrecer.
            </Text>
          )}
          {activeTab === "Ruta" && (
            <Text style={styles.description}>
              Mapa de la ruta en construcción...
            </Text>
          )}
          {activeTab === "Fotos" && (
            <Text style={styles.description}>
              Galería de fotos en construcción...
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111A3A",
  },
  headerImage: {
    width: "100%",
    height: "45%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#111A3A",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 25,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
    paddingBottom: 10,
    marginBottom: 20,
  },
  tabText: {
    color: "#888",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#D49A36", // Color dorado
  },
  activeTabIndicator: {
    height: 3,
    backgroundColor: "#D49A36",
    marginTop: 5,
    borderRadius: 2,
  },
  textScroll: {
    flex: 1,
  },
  description: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});
