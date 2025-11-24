import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F2F8F4" }}>
      <View style={styles.container}>
        {/* LEFT ILLUSTRATION */}
        <View style={styles.left}>
          <Text style={styles.smart}>Smart Farmer</Text>
          <View style={styles.earnWrap}>
            <Text style={styles.earn}>Earn</Text>
            <Text style={styles.profit}>Smart Profit</Text>
          </View>

          <View style={styles.centerImg}>
            {/* <Image
              source={require("./assets/farmer.png")}
              style={{ width: 220, height: 350, resizeMode: "contain" }}
            /> */}
          </View>

          {/* <Image
            source={require("./assets/profit.png")}
            style={styles.cardLeft}
          /> */}
          {/* 
          <Image
            source={require("./assets/order.png")}
            style={styles.cardRight}
          /> */}
        </View>

        {/* RIGHT LOGIN BOX */}
        <View style={styles.right}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.smartCrop}>
            Smart<Text style={{ color: "#FFB800" }}>Crop</Text>
          </Text>

          <Text style={styles.sub}>
            Please sign-in to your account and start the adventure
          </Text>

          {/* INPUTS */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Please Enter Your Email"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="***************"
          />

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.btnText}>SIGN IN →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    display: flex
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  left: {
    alignItems: "center",
    marginBottom: 30,
  },

  smart: {
    fontSize: 22,
    color: "#4D8A5B",
    fontWeight: "600",
  },
  earnWrap: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  earn: {
    fontSize: 40,
    color: "#E9A531",
    fontWeight: "700",
  },
  profit: {
    fontSize: 20,
    color: "#4D8A5B",
    fontWeight: "600",
  },

  centerImg: {
    marginTop: 10,
  },
  cardLeft: {
    position: "absolute",
    left: 0,
    top: 150,
    width: 120,
    height: 90,
    resizeMode: "contain",
  },
  cardRight: {
    position: "absolute",
    right: 0,
    top: 200,
    width: 120,
    height: 90,
    resizeMode: "contain",
  },

  right: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  welcome: {
    fontSize: 18,
    color: "#555",
  },
  smartCrop: {
    fontSize: 30,
    fontWeight: "700",
    color: "#4D8A5B",
    marginBottom: 6,
  },
  sub: {
    fontSize: 13,
    color: "#777",
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#444",
    marginBottom: 5,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  forgot: {
    color: "#4D8A5B",
    textAlign: "right",
    marginBottom: 20,
  },

  signInBtn: {
    backgroundColor: "#FFB800",
    paddingVertical: 14,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#333",
    fontSize: 16,
  },
});
