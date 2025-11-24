import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function PlantDetailScreen({ route }) {
  const { name, image, idealMoisture, desc } = route.params;

  // Giả lập độ ẩm hiện tại (sau này bạn thay API IoT)
  const currentMoisture = 55;

  const getStatus = () => {
    if (currentMoisture < 35) return "❗ Thiếu nước";
    if (currentMoisture > 60) return "⚠️ Độ ẩm cao";
    return "✔ Bình thường";
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Độ ẩm lý tưởng:</Text>
        <Text style={styles.value}>{idealMoisture}</Text>

        <Text style={styles.label}>Độ ẩm hiện tại:</Text>
        <Text style={styles.value}>{currentMoisture}%</Text>

        <Text style={styles.label}>Trạng thái:</Text>
        <Text style={styles.status}>{getStatus()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },

  img: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },

  name: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "700",
    color: "#2E4F2F",
  },

  desc: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
  },

  infoBox: {
    marginTop: 20,
    backgroundColor: "#eef8ec",
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E4F2F",
  },

  status: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
  },
});
