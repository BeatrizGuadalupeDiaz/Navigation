import { TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 3,
    backgroundColor: Colors.ligth,
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 17,
  },
});
