import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import EditProfileScreen from "../screens/User/EditProfileScreen";
import DeviceScreen from "../screens/User/DeviceScreen";
import ActivityLogScreen from "../screens/User/ActivityLogScreen";
import SecurityScreen from "../screens/User/SecurityScreen";
import SupportScreen from "../screens/User/SupportScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tab navigator nằm trong Stack */}
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        {/* Trang chi tiết cây */}
        <Stack.Screen name="Detail" component={ProductDetailScreen} />

        {/* Infor */}
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        {/*  Device */}
        <Stack.Screen name="Device" component={DeviceScreen} />
        <Stack.Screen name="ActivityLog" component={ActivityLogScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        {/* <Stack.Screen name="EditProfile" component={EditProfileScreen} /> */}
        {/*  Login */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
