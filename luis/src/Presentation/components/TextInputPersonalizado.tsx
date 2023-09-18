import React from "react";
import { View, Image, TextInput, StyleSheet, KeyboardType } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keybordType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}
export const TextInputPersonalizado = ({
  image,
  placeholder,
  value,
  keybordType,
  secureTextEntry,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.textFormInput}
        placeholder={placeholder}
        value={value}
        keyboardType={keybordType}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(property, text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  formIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 20,
  },
  textFormInput: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: MyColors.primary,
    marginLeft: 10,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
