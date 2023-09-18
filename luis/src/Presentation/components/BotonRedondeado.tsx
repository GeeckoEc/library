import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
    text:string,
    onPress:()=>void
}
export const BotonRedondeado = ({text, onPress}:Props) => {
  return (
    <TouchableOpacity style={styles.redondearBoton} 
    onPress={() => onPress()}>
      <Text style={styles.textButton}>
        {text}
      </Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    redondearBoton:{
        width:'100%',
        height:50,
        backgroundColor:MyColors.primary ,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginLeft: 5
    },
    textButton:{
        color:'white'
    }
})
