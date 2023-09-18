import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { BotonRedondeado } from "../../components/BotonRedondeado";
import { TextInputPersonalizado } from "../../components/TextInputPersonalizado";
import usuViewModel from "./ViewModel";
export const RegisterScreen = () => {
  const {
    Nombre,
    Direccion,
    Ciudad,
    Capacidad,
    TipoCocina,
    onChange, register
  } = usuViewModel();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/restaurant.jpg")}
      />
      <View style={styles.logoConteiner}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/register.png")}
        />
        <Text style={styles.logoText}>Registro de Restaurant</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

        <TextInputPersonalizado
          image={require("../../../../assets/user.png")}
          placeholder="Nombre"
          keybordType="default"
          property="Nombres"
          onChangeText={onChange}
          value={Nombre}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/direction.png")}
          placeholder="Dirección"
          keybordType="default"
          property="Dirección"
          onChangeText={onChange}
          value={Direccion}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/city.png")}
          placeholder="Ciudad"
          keybordType="default"
          property="Ciudad"
          onChangeText={onChange}
          value={Ciudad}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/group.png")}
          placeholder="Capacidad"
          keybordType="default"
          property="Capacidad"
          onChangeText={onChange}
          value={Capacidad}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/kitchen.png")}
          placeholder="Tipo de Cocina"
          keybordType="default"
          property="TipoCocina"
          onChangeText={onChange}
          value={TipoCocina}
        />


        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Ingresar"
            onPress={() => register()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 20,
  },
  textFormInput: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: MyColors.secondary,
    marginLeft: 10,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
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
    alignItems: "center",
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
