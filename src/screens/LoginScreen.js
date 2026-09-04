import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../services/supabase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrarUsuario = async () => {
    if (email === "" || password === "") {
      Alert.alert("Atención", "Por favor ingresa un correo y contraseña.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Error al registrar", error.message);
    } else {
      Alert.alert(
        "¡Registro Exitoso!",
        "Tu cuenta ha sido creada correctamente en Nica Go.",
      );
    }
  };

  return (
    <LinearGradient
      colors={["#D49A36", "#111A3A"]}
      locations={[0.05, 0.45]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Descubre{"\n"}Nicaragua{"\n"}a tu manera
        </Text>

        <View style={styles.logoPlaceholder}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>INICIAR SESIÓN</Text>

        <Text style={styles.inputLabel}>Correo Electrónico</Text>
        <View style={styles.inputWrapper}>
          <FontAwesome5
            name="envelope"
            size={18}
            color="#64748B"
            style={styles.icon}
          />
          <TextInput
            style={[styles.inputText, { outlineStyle: "none" }]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
        </View>

        <Text style={styles.inputLabel}>Contraseña</Text>
        <View style={styles.inputWrapper}>
          <FontAwesome5
            name="lock"
            size={18}
            color="#64748B"
            style={styles.icon}
          />
          <TextInput
            style={[styles.inputText, { outlineStyle: "none" }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerLabel}>Aun no tienes cuenta?</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={registrarUsuario}
        >
          <Text style={styles.registerButtonText}>Registrate</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialSection}>
        <Text style={styles.socialText}>INICIA SESIÓN CON</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="apple" size={26} color="#111A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="google" size={22} color="#111A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="facebook-f" size={22} color="#111A3A" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 25,
    marginBottom: 40,
    zIndex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#111A3A",
    lineHeight: 34,
    width: "60%",
    marginTop: 10,
  },
  logoPlaceholder: {
    position: "absolute",
    right: 15,
    top: -10,
    width: 120,
    height: 140,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  formContainer: {
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 25,
  },
  subtitle: {
    fontSize: 30,
    color: "#FFFFFF",
    marginBottom: 15,
    fontWeight: "bold",
  },
  inputLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    width: "85%",
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: "#111A3A",
    height: "100%",
  },
  loginButton: {
    backgroundColor: "#D49A36",
    width: "85%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  loginButtonText: {
    color: "#111A3A",
    fontSize: 22,
    fontWeight: "bold",
  },
  registerLabel: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },
  registerButton: {
    backgroundColor: "#E8E8E8",
    width: "75%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#111A3A",
    fontSize: 22,
    fontWeight: "bold",
  },
  socialSection: {
    alignItems: "center",
    marginTop: 35,
  },
  socialText: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 15,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  socialButton: {
    width: 75,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
});
