import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tab navigator nằm trong Stack */}
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        {/* Trang chi tiết cây */}
        <Stack.Screen name="Detail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
