import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const stylesGlobal = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.ligth,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});
