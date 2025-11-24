import { View, Text, StyleSheet } from "react-native";

export default function HelpItem({ title, desc }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "700", color: "#2E4F2F" },
  desc: { marginTop: 3, fontSize: 14, color: "#566b55" },
});
