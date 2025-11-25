import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = [
  {
    id: 1,
    title: "Cây Thanh Long đang thiếu nước",
    time: "5 phút trước",
    type: "warning",
    desc: "Độ ẩm hiện tại 38%, thấp hơn mức lý tưởng 40–50%.",
  },
  {
    id: 2,
    title: "Cảm biến 02 đã hoạt động trở lại",
    time: "2 giờ trước",
    type: "sensor",
    desc: "Thiết bị đã kết nối lại sau 15 phút mất tín hiệu.",
  },
  {
    id: 3,
    title: "Rau Muống có độ ẩm cao",
    time: "Hôm qua",
    type: "info",
    desc: "Độ ẩm 82% cao hơn mức khuyến nghị 70–80%.",
  },
  {
    id: 4,
    title: "Đã tưới nước tự động cho Cây Lúa",
    time: "2 ngày trước",
    type: "water",
    desc: "Hệ thống tự động đã tưới 0.3L nước.",
  },
];

export default function NotificationScreen() {
  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return <Ionicons name="warning" size={22} color="#f97316" />;
      case "sensor":
        return (
          <Ionicons name="hardware-chip-outline" size={22} color="#3b82f6" />
        );
      case "water":
        return <Ionicons name="water" size={22} color="#0ea5e9" />;
      default:
        return <Ionicons name="leaf-outline" size={22} color="#16a34a" />;
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Thông báo</Text>
        <Text style={styles.desc}>Cập nhật mới từ hệ thống IoT</Text>

        {notifications.map((n) => (
          <TouchableOpacity key={n.id} style={styles.card}>
            <View style={styles.iconBox}>{getIcon(n.type)}</View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{n.title}</Text>
              <Text style={styles.cardTime}>{n.time}</Text>
              <Text style={styles.cardDesc}>{n.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f3f6f2", // tránh đụng camera
  },
  container: {
    backgroundColor: "#f3f6f2",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 20,
  },
  desc: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#ecfdf5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1f2937",
  },
  cardTime: {
    fontSize: 11,
    color: "#6b7280",
    marginTop: 2,
  },
  cardDesc: {
    fontSize: 12,
    color: "#374151",
    marginTop: 6,
  },
});
