import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LineChart, BarChart } from "react-native-gifted-charts";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
export default function StatisticScreen() {
  const lineData = [
    { value: 58, label: "T2" },
    { value: 62, label: "T3" },
    { value: 55, label: "T4" },
    { value: 60, label: "T5" },
    { value: 68, label: "T6" },
    { value: 72, label: "T7" },
    { value: 65, label: "CN" },
  ];

  const barData = [
    { value: 64, label: "Lúa", frontColor: "#4ade80" },
    { value: 38, label: "T.Long", frontColor: "#22c55e" },
    { value: 82, label: "R.Muống", frontColor: "#10b981" },
    { value: 57, label: "D.Leo", frontColor: "#16a34a" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f6f2" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Thống kê nông nghiệp</Text>
        <Text style={styles.subtitle}>Tổng quan dữ liệu tuần này</Text>

        {/* QUICK STATS */}
        <View style={styles.row}>
          <View style={styles.card}>
            <Ionicons name="water" size={24} color="#0ea5e9" />
            <Text style={styles.cardValue}>63%</Text>
            <Text style={styles.cardLabel}>Độ ẩm trung bình</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="alert-circle" size={24} color="#f97316" />
            <Text style={styles.cardValue}>2</Text>
            <Text style={styles.cardLabel}>Cây bất thường</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Ionicons name="hardware-chip-outline" size={24} color="#16a34a" />
            <Text style={styles.cardValue}>3</Text>
            <Text style={styles.cardLabel}>Cảm biến online</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="leaf-outline" size={24} color="#22c55e" />
            <Text style={styles.cardValue}>1.8L</Text>
            <Text style={styles.cardLabel}>Nước tưới</Text>
          </View>
        </View>

        {/* LINE CHART */}
        <Text style={styles.sectionTitle}>Biểu đồ độ ẩm 7 ngày</Text>

        <View style={styles.chartBox}>
          <LineChart
            data={lineData}
            curved
            thickness={3}
            color="#22c55e"
            startFillColor="#bbf7d0"
            endFillColor="#ffffff00"
            startOpacity={0.6}
            endOpacity={0}
            hideDataPoints={false}
            dataPointsColor="#16a34a"
            dataPointsRadius={4}
            spacing={40}
            height={180}
          />
        </View>

        {/* BAR CHART */}
        <Text style={styles.sectionTitle}>Độ ẩm theo từng loại cây</Text>

        <View style={styles.chartBox}>
          <BarChart
            data={barData}
            barWidth={35}
            spacing={40}
            roundedTop
            height={180}
            noOfSections={4}
          />
        </View>

        {/* ALERT LIST */}
        <Text style={styles.sectionTitle}>Cảnh báo</Text>

        <View style={styles.alertBox}>
          <View style={styles.alertRow}>
            <Ionicons name="alert-circle" size={18} color="#f97316" />
            <Text style={styles.alertText}>Thanh Long: 38% • Thiếu nước</Text>
          </View>

          <View style={styles.alertRow}>
            <Ionicons name="alert-circle" size={18} color="#ef4444" />
            <Text style={styles.alertText}>Rau Muống: 82% • Độ ẩm cao</Text>
          </View>
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 2,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 6,
  },
  cardLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#14532d",
    marginTop: 18,
    marginBottom: 8,
  },

  chartBox: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },

  alertBox: {
    backgroundColor: "#fff7d6",
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
  },
  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  alertText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#92400e",
  },
});
