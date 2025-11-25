import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PlantDetailScreen({ route }) {
  const { name, image, idealMoisture, desc } = route.params;

  const currentMoisture = 55;

  const getStatus = () => {
    if (currentMoisture < 35) return "❗ Thiếu nước";
    if (currentMoisture > 60) return "⚠️ Độ ẩm cao";
    return "✔ Bình thường";
  };

  return (
    <View style={{ flex: 1 }}>
      {/* SCROLL CONTENT */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: image }} style={styles.img} />

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.desc}>
          {desc}
          {"\n\n"}
          {name} là một trong những loại cây trồng phổ biến...
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Thông tin độ ẩm</Text>

          <Text style={styles.label}>Độ ẩm lý tưởng:</Text>
          <Text style={styles.value}>{idealMoisture}</Text>

          <Text style={styles.label}>Độ ẩm hiện tại:</Text>
          <Text style={styles.value}>{currentMoisture}%</Text>

          <Text style={styles.label}>Trạng thái:</Text>
          <Text style={[styles.status]}>{getStatus()}</Text>
        </View>

        <View style={styles.iotBox}>
          <Text style={styles.sectionTitle}>Ứng dụng IoT cho cây trồng</Text>
          <Text style={styles.iotText}>• ...</Text>
        </View>

        <View style={styles.benefitBox}>
          <Text style={styles.sectionTitle}>Lợi ích khi theo dõi IoT</Text>
          <Text style={styles.benefitText}>✔ ...</Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FIXED BUTTONS */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.btnFollow}>
          <Text style={styles.btnLabel}>Theo dõi cây trồng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel}>
          <Text style={styles.btnLabel}>Hủy cây trồng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },

  img: {
    width: "100%",
    height: 260,
    borderRadius: 14,
  },

  name: {
    marginTop: 18,
    fontSize: 26,
    fontWeight: "800",
    color: "#1b4332",
  },

  desc: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E4F2F",
    marginBottom: 8,
  },

  infoBox: {
    marginTop: 25,
    backgroundColor: "#eef8ec",
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 12,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E4F2F",
  },

  status: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
  },

  iotBox: {
    marginTop: 25,
    backgroundColor: "#e1f3e5",
    padding: 20,
    borderRadius: 12,
  },
  iotText: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },

  benefitBox: {
    marginTop: 25,
    backgroundColor: "#f0fdf4",
    padding: 20,
    borderRadius: 12,
  },
  benefitText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#2f4f2f",
  },
  bottomButtons: {
    display: "fixed",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20, // ⬅ cách đáy 20px cho thoáng
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 40,
    justifyContent: "space-between",
  },

  btnFollow: {
    flex: 1,
    backgroundColor: "#26d365ff",
    paddingVertical: 20,
    borderRadius: 50, // ⬅ bo góc mềm
    marginRight: 10,
    alignItems: "center",
    elevation: 3, // ⬅ bóng nhẹ Android
    shadowColor: "#000", // ⬅ bóng iOS
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },

  btnCancel: {
    flex: 1,
    backgroundColor: "#cd3939ff",
    paddingVertical: 20,
    borderRadius: 50, // ⬅ bo góc mềm
    marginLeft: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  btnLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
