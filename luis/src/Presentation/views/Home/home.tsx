import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { BotonRedondeado } from "../../components/BotonRedondeado";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import usuViewModel from "./ViewModel";
import { TextInputPersonalizado } from "../../components/TextInputPersonalizado";

export const HomeScreen = () => {
  const { email, password, onChange } = usuViewModel();
  const navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/restaurant.jpg")}
      />
      <View style={styles.logoConteiner}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={styles.logoText}>Restaurant</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Seleccione una opción</Text>

        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Lista de Restaurantes"
            onPress={() => navegacion.navigate("ListScreen")}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Ingresar Restaurante"
            onPress={() => navegacion.navigate("RegisterScreen")}
          />
        </View>
        
        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Actualizar Restaurantes"
            onPress={() => navegacion.navigate("UpdateScreen")}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Eliminar Restaurantes"
            onPress={() => navegacion.navigate("HomeScreen")}
          />
        </View>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageMenu: {
    width: 50,
    height: 50,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 20,
    color: MyColors.secondary
  },
  logoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoConteiner: {
    position: "absolute",
    alignSelf: "center",
    top: "0%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  form: {
    width: "100%",
    height: "80%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    padding: 30,
  },
});
