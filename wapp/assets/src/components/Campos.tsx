import React from "react";
import { AppColors } from "../presentation/theme/AppTheme";
import { Image, KeyboardType, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
    icono:          string,     // X
    etiqueta:       string,
    consejo:        string,     // X
    valor:          string,
    propiedad:      string,     
    teclado:        KeyboardType,
    entradaSegura:  boolean,
    onChangeText:   (propiedad: string, valor: any) => void
}

export const Campo = ({icono, etiqueta, consejo, valor, propiedad, teclado, entradaSegura, onChangeText}:Props) => {
    return (
        <View 
            style={estilos.EstiloContenedor}
        >
            <View style={estilos.EstiloGrupo}>
                <Image 
                    style={estilos.EstiloIcono} 
                    source={require("../../icons/" + icono + ".svg")}
                />
                <Text style={estilos.EstiloEtiqueta}>
                    {etiqueta}
                </Text>
            </View>
            <TextInput 
                style           =   {estilos.EstiloCampo} 
                placeholder     =   {consejo}
                value           =   {valor}
                secureTextEntry =   {entradaSegura}
                keyboardType    =   {teclado}
                onChangeText    =   {(texto) => onChangeText(propiedad, texto)}
            >
            </TextInput>
        </View>
    )
}

const estilos = StyleSheet.create({
    EstiloContenedor:{
        marginTop:          0,
        marginBottom:       10,
    }, 
    EstiloGrupo:{                               // X
        paddingTop:         3,                  //X
        paddingBottom:      3,
        flexDirection:      "row",
    },
    EstiloEtiqueta:{
        paddingTop:         2,
    },
    EstiloCampo:{
        padding:            10,
        backgroundColor:    '#FFFFFF',          // X
        color:              '#000000',          // X
        textAlign:          'center',           // X
        marginBottom:       10,                 // X
        borderColor:        AppColors.info,
        borderStyle:        'solid',
        borderWidth:        1.5,
        borderRadius:       5,                  // X
    },
    EstiloIcono:{                               // X
        height:             24,                 // X
        width:              24,                 // X
        marginEnd:          10,                 // X
    }
})