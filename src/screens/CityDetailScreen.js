import { StyleSheet, Text, View } from "react-native";

export default function CityDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Detalle de Ciudad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
