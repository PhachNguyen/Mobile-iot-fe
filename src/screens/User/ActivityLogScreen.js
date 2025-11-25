import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logs = [
  "Đã tưới cây Lúa (0.3L)",
  "Thanh Long cảnh báo thiếu nước",
  "Cảm biến 02 mất kết nối",
  "Độ ẩm Rau Muống vượt ngưỡng",
];

export default function ActivityLogScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Nhật ký hoạt động</Text>

      <ScrollView>
        {logs.map((item, i) => (
          <View key={i} style={styles.logItem}>
            <Text style={styles.logText}>• {item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3f6f2", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#14532d",
    marginBottom: 16,
  },
  logItem: {
    padding: 14,
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 12,
    marginBottom: 10,
  },
  logText: {
    fontSize: 14,
    color: "#374151",
  },
});
