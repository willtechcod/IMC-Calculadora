import { StatusBar } from "expo-status-bar";
import {
  Switch,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero((previousState) => !previousState);
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} está Abaixo do peso`
        );
      if (imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)}  é considerado Normal`
        );
      if (imc > 26.4 && imc <= 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)}  está um Pouco acima do peso`
        );
      if (imc > 27.8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)}  está Acima do peso`
        );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)}  está Obeso`
        );
    } else {
      if (imc < 19.1)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} está Abaixo do peso`
        );
      if (imc >= 19.1 && imc <= 25.8)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} é considerado Normal`
        );
      if (imc > 25.8 && imc <= 27.3)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} está um Pouco acima do peso`
        );
      if (imc > 27.3 && imc <= 32.3)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)}está Acima do peso`
        );
      if (imc > 32.3)
        return Alert.alert(
          "Obesa!",
          `Seu IMC é de ${imc.toFixed(2)}está Obesa`
        );
    }
  };

  return (
    <ImageBackground
      source={require("./assets/bg.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar style="dark" />
      <View style={styles.inputGroupRow}>
        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: "#FFC0CB", true: "#81b0ff" }}
          thumbColor={genero ? "#81b0ff" : "#FFC0CB"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text>Masculino</Text>
      </View>

      <Text>Altura</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />
      <Text>Peso</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />
      <TouchableOpacity onPress={handleCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    backgroundColor: "#2AD131",
    width: "80%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
  },
});
