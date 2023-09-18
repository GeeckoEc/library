import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { BotonRedondeado } from "../../components/BotonRedondeado";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import usuViewModel from "./ViewModel";
import { TextInputPersonalizado } from "../../components/TextInputPersonalizado";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Che Luis',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'La Piedra',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Origen',
  },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
export const UpdateScreen = () => {
  const navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => navegacion.navigate("UpdateRegisterScreen")}
        backgroundColor={MyColors.secondary}
        textColor={color}
      />
    );
  };
  return (
    <SafeAreaView style={styles.containerList}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  imageMenu: {
    width: 50,
    height: 50,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderEndWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
    marginLeft: 5,
  },
  formRegister: {
    flexDirection: "row",
    fontStyle: "italic",
    marginTop: 5,
    alignSelf: "center",
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