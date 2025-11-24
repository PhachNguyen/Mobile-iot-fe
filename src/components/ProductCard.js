import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    elevation: 2,
  },
  img: { width: "100%", height: 100, borderRadius: 10 },
  title: { textAlign: "center", marginTop: 8, fontWeight: "600" },
});
