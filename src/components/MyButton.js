import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";

export default function MyButton({ title, OnPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={OnPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: Colors.ligth,
    fontWeight: "bold",
  },
});
