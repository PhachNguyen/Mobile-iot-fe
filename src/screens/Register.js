import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F2F8F4" }}>
      <View style={styles.container}>
        {/* ILLUSTRATION */}
        <View style={styles.top}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.sub}>
            Join SmartCrop and start your smart farming journey 🌱
          </Text>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2906/2906649.png",
            }}
            style={styles.img}
          />
        </View>

        {/* REGISTER BOX */}
        <View style={styles.box}>
          {/* NAME */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />

          {/* EMAIL */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />

          {/* PASSWORD */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="***************"
          />

          {/* CONFIRM PASSWORD */}
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="***************"
          />

          {/* BUTTON */}
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>REGISTER →</Text>
          </TouchableOpacity>

          {/* LINK LOGIN */}
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={{ marginTop: 22 }}
          >
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text style={{ color: "#4D8A5B", fontWeight: "700" }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  top: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#4D8A5B",
  },

  sub: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
    textAlign: "center",
  },

  img: {
    width: 180,
    height: 180,
    marginTop: 20,
  },

  box: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 3,
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#444",
    marginBottom: 4,
    marginTop: 12,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  btnRegister: {
    backgroundColor: "#FFB800",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 26,
  },

  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  loginText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
