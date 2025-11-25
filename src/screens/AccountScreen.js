import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen({ navigation }) {
  const user = {
    name: "Nguyễn Văn A",
    email: "user@gmail.com",
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };

  const menu = [
    {
      icon: "person-circle-outline",
      label: "Chỉnh sửa thông tin",
      screen: "EditProfile",
    },
    {
      icon: "hardware-chip-outline",
      label: "Thiết bị IoT đã kết nối",
      screen: "Device",
    },
    {
      icon: "document-text-outline",
      label: "Nhật ký hoạt động",
      screen: "ActivityLog",
    },
    {
      icon: "lock-closed-outline",
      label: "Bảo mật & quyền riêng tư",
      screen: "Security",
    },
    {
      icon: "help-circle-outline",
      label: "Trung tâm hỗ trợ",
      screen: "Support",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER USER */}
        <View style={styles.header}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />

          <View>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>

        {/* MENU BOX */}
        <View style={styles.menuBox}>
          {menu.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Ionicons name={item.icon} size={22} color="#14532d" />
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9ca3af"
                style={{ marginLeft: "auto" }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => navigation.navigate("login")}
        >
          <Ionicons name="log-out-outline" size={22} color="#dc2626" />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3f6f2" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 22,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
    borderWidth: 3,
    borderColor: "#d1fae5",
  },
  username: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1b4332",
  },
  email: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  menuBox: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    paddingVertical: 8,
    marginHorizontal: 20,
    elevation: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderColor: "#eef1ef",
  },
  menuLabel: {
    fontSize: 15,
    marginLeft: 12,
    color: "#1f2937",
    fontWeight: "500",
  },
  logoutBtn: {
    flexDirection: "row",
    backgroundColor: "#ffe4e6",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginTop: 26,
    alignItems: "center",
    marginHorizontal: 20,
  },
  logoutText: {
    fontSize: 15,
    marginLeft: 8,
    color: "#dc2626",
    fontWeight: "700",
  },
});
