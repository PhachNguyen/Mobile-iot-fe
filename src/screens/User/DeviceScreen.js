import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const devices = [
  { id: 1, name: "Cảm biến 01", status: "Online" },
  { id: 2, name: "Cảm biến 02", status: "Mất kết nối" },
  { id: 3, name: "Cảm biến 03", status: "Online" },
];

export default function DeviceScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.title}>Thiết bị IoT</Text>

        {devices.map((d) => (
          <TouchableOpacity key={d.id} style={styles.card}>
            <Ionicons
              name="hardware-chip-outline"
              size={26}
              color={d.status === "Online" ? "#22c55e" : "#dc2626"}
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.deviceName}>{d.name}</Text>
              <Text
                style={[
                  styles.deviceStatus,
                  {
                    color: d.status === "Online" ? "#16a34a" : "#dc2626",
                  },
                ]}
              >
                {d.status}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#9ca3af"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3f6f2", paddingHorizontal: 20 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    color: "#14532d",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  deviceName: { fontSize: 16, fontWeight: "700", color: "#1f2937" },
  deviceStatus: { fontSize: 12, marginTop: 2 },
});
