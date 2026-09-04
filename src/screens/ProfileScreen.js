import { FontAwesome5 } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  // Lista de opciones del menú basadas en el diseño oficial
  const menuOptions = [
    { id: "1", title: "Idiomas", icon: "globe" },
    { id: "2", title: "Centro de ayudas", icon: "question-circle" },
    { id: "3", title: "Notificaciones", icon: "bell" },
    { id: "4", title: "Acerca de Nica Go", icon: "info-circle" },
  ];

  return (
    <View style={styles.container}>
      {/* Sección superior con foto e información del usuario */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Alejandra Martinez</Text>
        <Text style={styles.email}>alertd@gmail.com</Text>
      </View>

      {/* Lista de opciones del menú */}
      <ScrollView style={styles.menuContainer}>
        {menuOptions.map((option) => (
          <TouchableOpacity key={option.id} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <FontAwesome5
                name={option.icon}
                size={20}
                color="#D49A36"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>{option.title}</Text>
            </View>
            <FontAwesome5 name="chevron-right" size={16} color="#64748B" />
          </TouchableOpacity>
        ))}

        {/* Botón de Cerrar Sesión */}
        <TouchableOpacity
          style={[styles.menuItem, styles.logoutButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.menuLeft}>
            <FontAwesome5
              name="sign-out-alt"
              size={20}
              color="#FF4C4C"
              style={styles.menuIcon}
            />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111A3A",
  },
  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#D49A36",
    marginBottom: 15,
  },
  name: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    color: "#888",
    fontSize: 16,
    marginTop: 5,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 30,
    textAlign: "center",
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: "#111A3A",
    fontWeight: "600",
  },
  logoutButton: {
    borderBottomWidth: 0,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    color: "#FF4C4C",
    fontWeight: "bold",
  },
});
