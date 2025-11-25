import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const plants = [
  {
    id: 1,
    name: "Cây Lúa",
    idealMoisture: "60–70%",
    currentMoisture: 64,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    desc: "Cây lúa cần độ ẩm cao để sinh trưởng và phát triển tốt.",
  },
  {
    id: 2,
    name: "Cây Thanh Long",
    idealMoisture: "40–50%",
    currentMoisture: 38,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    desc: "Thanh long ưa đất thoáng, độ ẩm vừa phải, tránh úng.",
  },
  {
    id: 3,
    name: "Cây Rau Muống",
    idealMoisture: "70–80%",
    currentMoisture: 82,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    desc: "Rau muống phát triển mạnh trong môi trường nhiều nước.",
  },
  {
    id: 4,
    name: "Cây Dưa Leo",
    idealMoisture: "55–65%",
    currentMoisture: 57,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    desc: "Dưa leo cần đủ ẩm và thoát nước tốt để tránh thối rễ.",
  },
];

const alertsMock = [
  "Thanh Long đang thiếu nước (38%)",
  "Rau Muống có độ ẩm cao (82%)",
];

export default function HomeScreen({ navigation }) {
  const avgMoisture = Math.round(
    plants.reduce((sum, p) => sum + p.currentMoisture, 0) / plants.length
  );

  const onlineSensors = 3;
  const lastUpdate = "3 phút trước";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f6f2" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO BANNER */}
        <ImageBackground
          source={{
            uri: "file:///mnt/data/359553a5-d642-4122-b9b1-0cd4de147c43.png",
          }}
          style={styles.banner}
          imageStyle={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Hệ thống IoT độ ẩm cây trồng</Text>
            <Text style={styles.bannerSubtitle}>
              Giám sát – Thông minh – Chính xác
            </Text>
          </View>
        </ImageBackground>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Xin chào 👋</Text>
            <Text style={styles.projectName}>Chúc bạn một ngày tốt lành!</Text>
          </View>

          <View style={styles.iotBadge}>
            <Ionicons name="wifi" size={18} color="#22c55e" />
            <Text style={styles.iotText}>Online</Text>
          </View>
        </View>

        {/* SYSTEM STATUS CARD */}
        <View style={styles.statusCard}>
          <View style={styles.statusLeft}>
            <Text style={styles.statusTitle}>Trạng thái hệ thống</Text>
            <Text style={styles.statusSubtitle}>
              Cảm biến hoạt động ổn định, dữ liệu đang được cập nhật.
            </Text>

            <View style={styles.statusRow}>
              <View style={styles.statusItem}>
                <Ionicons name="water" size={20} color="#0ea5e9" />
                <View style={{ marginLeft: 8 }}>
                  <Text style={styles.statusLabel}>Độ ẩm trung bình</Text>
                  <Text style={styles.statusValue}>{avgMoisture}%</Text>
                </View>
              </View>

              <View style={styles.statusItem}>
                <Ionicons name="podium" size={20} color="#fb923c" />
                <View style={{ marginLeft: 8 }}>
                  <Text style={styles.statusLabel}>Cảm biến online</Text>
                  <Text style={styles.statusValue}>{onlineSensors}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.lastUpdate}>
              Cập nhật lần cuối:{" "}
              <Text style={{ fontWeight: "600" }}>{lastUpdate}</Text>
            </Text>
          </View>

          <View style={styles.statusRight}>
            <Ionicons name="hardware-chip-outline" size={44} color="#4ade80" />
          </View>
        </View>

        {/* PLANTS SECTION */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cây trồng của bạn</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.plantGrid}>
          {plants.map((p) => (
            <TouchableOpacity
              key={p.id}
              style={styles.plantCard}
              onPress={() =>
                navigation.navigate("Detail", {
                  name: p.name,
                  image: p.image,
                  idealMoisture: p.idealMoisture,
                  desc: p.desc,
                  currentMoisture: p.currentMoisture,
                })
              }
            >
              <Image source={{ uri: p.image }} style={styles.plantImg} />
              <Text style={styles.plantName}>{p.name}</Text>
              <Text style={styles.plantMoisture}>
                Lý tưởng: {p.idealMoisture}
              </Text>
              <View style={styles.plantCurrentRow}>
                <Ionicons name="water-outline" size={14} color="#0ea5e9" />
                <Text style={styles.plantCurrentText}>
                  Hiện tại: {p.currentMoisture}%
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* ALERTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cảnh báo</Text>
        </View>

        <View style={styles.alertCard}>
          {alertsMock.map((a, index) => (
            <View key={index} style={styles.alertRow}>
              <MaterialIcons
                name="warning-amber"
                size={18}
                color="#f97316"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.alertText}>{a}</Text>
            </View>
          ))}
        </View>

        {/* QUICK ACTIONS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Chức năng nhanh</Text>
        </View>

        <View style={styles.quickRow}>
          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="add-circle-outline" size={26} color="#22c55e" />
            <Text style={styles.quickText}>Thêm cây</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="hardware-chip-outline" size={26} color="#3b82f6" />
            <Text style={styles.quickText}>Thiết bị</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="document-text-outline" size={26} color="#f97316" />
            <Text style={styles.quickText}>Nhật ký</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="stats-chart-outline" size={26} color="#a855f7" />
            <Text style={styles.quickText}>Báo cáo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
        {/* PRODUCT INTRO */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Giới thiệu hệ thống</Text>
        </View>

        <View style={styles.introBox}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            }}
            style={styles.introImg}
          />

          <Text style={styles.introTitle}>
            Nâng cao năng suất – Tưới nước thông minh
          </Text>
          <Text style={styles.introText}>
            Hệ thống IoT giúp theo dõi độ ẩm đất theo thời gian thực, tối ưu
            lượng nước tưới và giảm chi phí vận hành cho nông hộ. Mọi dữ liệu
            được lưu trữ và phân tích để đưa ra gợi ý chăm sóc phù hợp cho từng
            loại cây trồng.
          </Text>
        </View>

        <View style={styles.introBox}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1581091870627-3ef5c0b1a28f",
            }}
            style={styles.introImg}
          />

          <Text style={styles.introTitle}>
            Kết nối cảm biến – Điều khiển từ xa
          </Text>
          <Text style={styles.introText}>
            Tự động hóa nông nghiệp với cảm biến độ ẩm, nhiệt độ, ánh sáng. Truy
            cập dữ liệu mọi lúc, mọi nơi và theo dõi vườn của bạn ngay trên điện
            thoại di động.
          </Text>
        </View>
        {/* FOOTER */}
        <View style={styles.footer}>
          <Ionicons name="leaf" size={32} color="#16a34a" />
          <Text style={styles.footerTitle}>SmartFarm IoT</Text>
          <Text style={styles.footerSlogan}>
            Nông nghiệp thông minh – Dẫn đầu công nghệ 🌱
          </Text>

          <Text style={styles.footerLink}>Hỗ trợ: support@smartfarm.io</Text>
          <Text style={styles.footerCopy}>
            © 2025 SmartFarm IoT. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  introBox: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  introImg: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: 12,
  },
  introTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#14532d",
    marginBottom: 4,
  },
  introText: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
  },

  footer: {
    marginTop: 30,
    paddingVertical: 26,
    backgroundColor: "#e9f7ee",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerTitle: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "700",
    color: "#14532d",
  },
  footerSlogan: {
    marginTop: 4,
    fontSize: 13,
    color: "#4d7c57",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  footerLink: {
    marginTop: 12,
    fontSize: 12,
    color: "#16a34a",
  },
  footerCopy: {
    marginTop: 6,
    fontSize: 11,
    color: "#6b7280",
  },

  banner: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
  },
  bannerOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.25)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bannerTextContainer: {
    padding: 20,
  },
  bannerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  bannerSubtitle: {
    color: "#e5e5e5",
    marginTop: 4,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hello: {
    fontSize: 14,
    color: "#6b7280",
  },
  projectName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 2,
  },

  iotBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcfce7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  iotText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#166534",
    fontWeight: "600",
  },

  statusCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: "#dff5e1",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
  },
  statusLeft: {
    flex: 1,
  },
  statusRight: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },

  statusTitle: {
    color: "#14532d",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  statusSubtitle: {
    color: "#396b47",
    fontSize: 12,
    marginBottom: 10,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 6,
  },

  statusLabel: {
    color: "#396b47",
    fontSize: 11,
  },
  statusValue: {
    color: "#14532d",
    fontSize: 16,
    fontWeight: "700",
  },

  lastUpdate: {
    marginTop: 8,
    color: "#14532d",
    fontSize: 11,
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#14532d",
  },
  linkText: {
    fontSize: 12,
    color: "#22c55e",
    fontWeight: "600",
  },

  plantGrid: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  plantCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 12,
    overflow: "hidden",
    elevation: 2,
  },
  plantImg: {
    width: "100%",
    height: 95,
    backgroundColor: "#e2e8f0",
  },
  plantName: {
    marginTop: 6,
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  plantMoisture: {
    marginHorizontal: 8,
    marginTop: 2,
    fontSize: 11,
    color: "#6b7280",
  },
  plantCurrentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 6,
  },
  plantCurrentText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#0f766e",
    fontWeight: "500",
  },

  alertCard: {
    marginHorizontal: 20,
    backgroundColor: "#fef3c7",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  alertText: {
    fontSize: 13,
    color: "#92400e",
    flex: 1,
  },

  quickRow: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  quickItem: {
    alignItems: "center",
    width: "23%",
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    elevation: 2,
  },
  quickText: {
    marginTop: 4,
    fontSize: 11,
    textAlign: "center",
    color: "#374151",
  },
});
