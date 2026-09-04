import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 1. Importamos TODAS tus pantallas
import CityDetailScreen from "../screens/CityDetailScreen";
import EventsScreen from "../screens/EventsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MapRouteScreen from "../screens/MapRouteScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Explora Nicaragua", headerShown: false }}
        />
        <Stack.Screen
          name="MapRoute"
          component={MapRouteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CityDetail"
          component={CityDetailScreen}
          options={{ title: "Ruta", headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: "Favoritos", headerShown: false }}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ title: "Eventos", headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Mi Perfil", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
