import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SecurityScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Bảo mật & Quyền riêng tư</Text>

        {/* INTRO */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Giới thiệu chung</Text>
          <Text style={styles.text}>
            Hệ thống IoT Nông nghiệp thông minh cam kết bảo vệ thông tin cá nhân
            và dữ liệu của bạn. Tất cả dữ liệu thu thập được đều được mã hóa,
            lưu trữ an toàn và chỉ sử dụng cho mục đích vận hành hệ thống tưới
            tiêu, giám sát độ ẩm và phục vụ phân tích nông nghiệp.
          </Text>
        </View>

        {/* ACCOUNT SECURITY */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>1. Bảo mật tài khoản</Text>
          <Text style={styles.text}>
            • Tài khoản của bạn được bảo vệ bằng mật khẩu riêng tư.{"\n"}• Bạn
            nên sử dụng mật khẩu mạnh gồm chữ hoa, chữ thường, số và ký tự đặc
            biệt.{"\n"}• Không chia sẻ thông tin đăng nhập với bất kỳ ai.{"\n"}•
            Hệ thống sẽ tự động cảnh báo nếu phát hiện đăng nhập bất thường.
            {"\n"}• Các phiên đăng nhập cũ có thể bị đăng xuất nếu có dấu hiệu
            không an toàn.
          </Text>
        </View>

        {/* PRIVACY */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>2. Quyền riêng tư dữ liệu</Text>
          <Text style={styles.text}>
            • Dữ liệu độ ẩm, chỉ số cây trồng và nhật ký tưới nước sẽ được sử
            dụng để tối ưu hóa mô hình nông nghiệp của bạn.{"\n"}• Không chia sẻ
            dữ liệu với bên thứ ba nếu không có sự đồng ý của bạn.{"\n"}• Tất cả
            dữ liệu được xử lý theo đúng tiêu chuẩn an toàn thông tin.{"\n"}•
            Bạn có quyền yêu cầu xem, tải xuống hoặc xóa dữ liệu cá nhân bất kỳ
            lúc nào.
          </Text>
        </View>

        {/* DEVICE ACCESS */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>3. Quyền truy cập thiết bị</Text>
          <Text style={styles.text}>
            Để hệ thống hoạt động hiệu quả, ứng dụng có thể yêu cầu quyền truy
            cập:{"\n\n"}• Camera: dùng để quét mã QR khi kết nối cảm biến IoT.
            {"\n"}• Vị trí: giúp xác định khu vực vườn để gợi ý điều kiện môi
            trường phù hợp.{"\n"}• Internet: đồng bộ dữ liệu thời gian thực.
            {"\n\n"}
            Các quyền này chỉ được sử dụng cho đúng mục đích hoạt động của hệ
            thống.
          </Text>
        </View>

        {/* AUTOMATION */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>4. Tự động hóa & cảnh báo</Text>
          <Text style={styles.text}>
            • Khi độ ẩm xuống thấp hoặc vượt ngưỡng, hệ thống sẽ gửi thông báo
            ngay lập tức.{"\n"}• Tự động tưới nước nếu bạn bật chế độ “Tưới tự
            động”.{"\n"}• Lưu trữ lịch sử cảnh báo để bạn theo dõi sức khỏe của
            cây trong thời gian dài.{"\n"}
          </Text>
        </View>

        {/* DANGER ZONE */}
        <View style={[styles.block, styles.danger]}>
          <Text style={[styles.blockTitle, styles.dangerTitle]}>
            5. Xóa tài khoản & dữ liệu
          </Text>
          <Text style={[styles.text, styles.dangerText]}>
            • Khi bạn yêu cầu xóa tài khoản, toàn bộ dữ liệu cây trồng, thiết bị
            IoT, lịch sử tưới tiêu sẽ bị xóa vĩnh viễn.{"\n"}• Thao tác này
            không thể khôi phục.{"\n"}• Hệ thống cần 1–3 ngày để hoàn tất việc
            xóa dữ liệu trên máy chủ.
          </Text>
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
    elevation: 2,
  },

  blockTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1b4332",
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 22,
  },

  danger: {
    backgroundColor: "#fff5f5",
  },

  dangerTitle: {
    color: "#dc2626",
  },

  dangerText: {
    color: "#b91c1c",
  },
});
