import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const plantsData = [
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

export default function PlantListScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plantsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (value, idealRange) => {
    const [min, max] = idealRange
      .replace("%", "")
      .split("–")
      .map((n) => Number(n));

    if (value < min) return "#fca5a5"; // thiếu nước
    if (value > max) return "#fde047"; // quá ẩm

    return "#bbf7d0"; // ổn
  };

  const getStatusText = (value, idealRange) => {
    const [min, max] = idealRange
      .replace("%", "")
      .split("–")
      .map((n) => Number(n));

    if (value < min) return "Thiếu nước";
    if (value > max) return "Quá ẩm";

    return "Ổn định";
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Sản phẩm nông nghiệp</Text>
      <Text style={styles.pageDesc}>
        Danh sách cây đang được theo dõi độ ẩm
      </Text>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#6b7280" />
        <TextInput
          placeholder="Tìm kiếm cây trồng..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* GRID LIST */}
      <View style={styles.plantGrid}>
        {filteredPlants.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.card}
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
            <Image source={{ uri: p.image }} style={styles.image} />

            <View style={styles.cardBody}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.ideal}>Lý tưởng: {p.idealMoisture}</Text>

              <View style={styles.moistureRow}>
                <Ionicons name="water-outline" size={14} color="#0ea5e9" />
                <Text style={styles.current}>
                  Hiện tại: {p.currentMoisture}%
                </Text>
              </View>

              {/* STATUS TAG */}
              <View
                style={[
                  styles.statusTag,
                  {
                    backgroundColor: getStatusColor(
                      p.currentMoisture,
                      p.idealMoisture
                    ),
                  },
                ]}
              >
                <Text style={styles.statusText}>
                  {getStatusText(p.currentMoisture, p.idealMoisture)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f6f2",
    flex: 1,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 20,
  },
  pageDesc: {
    color: "#6b7280",
    marginBottom: 18,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    elevation: 1,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },

  plantGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
  },
  cardBody: {
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1f2937",
  },
  ideal: {
    marginTop: 2,
    fontSize: 12,
    color: "#6b7280",
  },
  moistureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  current: {
    fontSize: 12,
    marginLeft: 4,
    color: "#0f766e",
  },

  statusTag: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#1f2937",
  },
});
