import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput style={styles.input} placeholder="Nhập họ tên" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Nhập email" />

        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View>
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
  },
  form: { marginTop: 20 },
  label: { marginTop: 12, color: "#1f2937", fontWeight: "600" },
  input: {
    backgroundColor: "#fff",
    marginTop: 6,
    padding: 12,
    borderRadius: 12,
    elevation: 1,
  },
  saveBtn: {
    backgroundColor: "#16a34a",
    marginTop: 24,
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  saveText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
