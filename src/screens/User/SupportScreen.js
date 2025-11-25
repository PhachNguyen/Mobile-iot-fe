import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function SupportScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Trung tâm hỗ trợ</Text>

        {/* GIỚI THIỆU NGẮN */}
        <View style={styles.block}>
          <View style={styles.titleRow}>
            <Ionicons name="help-circle-outline" size={22} color="#14532d" />
            <Text style={styles.blockTitle}>Giới thiệu</Text>
          </View>
          <Text style={styles.text}>
            Chúng tôi luôn sẵn sàng hỗ trợ khi bạn gặp khó khăn với hệ thống IoT
            nông nghiệp thông minh.
          </Text>
        </View>

        {/* HƯỚNG DẪN SỬ DỤNG */}
        <View style={styles.block}>
          <View style={styles.titleRow}>
            <Ionicons name="book-outline" size={22} color="#14532d" />
            <Text style={styles.blockTitle}>Hướng dẫn sử dụng</Text>
          </View>
          <Text style={styles.text}>
            • Thêm cây trồng vào hệ thống{"\n"}• Kiểm tra độ ẩm và trạng thái
            thiết bị{"\n"}• Bật/tắt chế độ tưới tự động{"\n"}• Xem lịch sử cảnh
            báo và nhật ký{"\n"}
          </Text>
        </View>

        {/* SỰ CỐ THƯỜNG GẶP */}
        <View style={styles.block}>
          <View style={styles.titleRow}>
            <Ionicons name="alert-circle-outline" size={22} color="#b45309" />
            <Text style={styles.blockTitle}>Sự cố thường gặp</Text>
          </View>
          <Text style={styles.text}>
            • Cảm biến không gửi dữ liệu{"\n"}• Độ ẩm hiển thị sai{"\n"}• Thiết
            bị IoT bị mất kết nối{"\n"}• Tưới tự động không hoạt động{"\n"}
          </Text>
        </View>

        {/* BUTTON KHU VỰC HÀNH ĐỘNG */}
        <View style={{ marginTop: 10 }}>
          {/* BUTTON 1 */}
          <TouchableOpacity style={styles.btnWhite}>
            <Ionicons name="chatbubbles-outline" size={20} color="#000" />
            <Text style={styles.btnLabelBlack}>Chat với hỗ trợ</Text>
          </TouchableOpacity>

          {/* BUTTON 2 */}
          <TouchableOpacity style={styles.btnWhite}>
            <Ionicons name="call-outline" size={20} color="#000" />
            <Text style={styles.btnLabelBlack}>Gọi Hotline</Text>
          </TouchableOpacity>

          {/* BUTTON 3 */}
          <TouchableOpacity style={styles.btnWhite}>
            <Ionicons name="mail-outline" size={20} color="#000" />
            <Text style={styles.btnLabelBlack}>Gửi Email hỗ trợ</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f3f6f2",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 20,
    marginBottom: 14,
  },

  block: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },

  blockTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1b4332",
  },

  text: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 21,
  },

  btnWhite: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },

  btnLabelBlack: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },
});
