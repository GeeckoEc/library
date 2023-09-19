import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { Image, StyleSheet, Text, View } from "react-native";
import { BotonPrimario } from "../../../components/Botones";

export const MenuScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={estilos.EstiloContenedor}>
            <Image 
                style={estilos.EstiloFondo}
                source={require('../../../../images/menu.jpg')}
            />
            <View style={estilos.EstiloMenu}>
                <Text style={estilos.EstiloTituloMenu}>MENU</Text>
                <View style={{marginTop: 50}}>
                    <BotonPrimario 
                        icono="book-solid"
                        texto="Nuevo Libro"
                        onPress={() => Navegacion.navigate('NuevoScreen')}
                    />
                    
                    <BotonPrimario 
                        icono="list-solid"
                        texto="Lista de Libros"
                        onPress={() => Navegacion.navigate('ListaScreen')}
                    />
                </View>
            </View>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    EstiloContenedor:{
        flex:               1,
    },
    EstiloMenu:{
        top:                0,
        bottom:             0,
        backgroundColor:    'steelblue',
        width:              200,
        position:           'absolute',
        paddingTop:         50,
    },
    EstiloItem:{

    },
    EstiloTituloMenu:{
        fontSize:           25,
        textTransform:      'uppercase',
        fontWeight:         '700', 
        textAlign:          'center',
        color:              'powderblue'
    },
    EstiloFondo:{
        width:              '100%',
        height:             '100%',
        opacity:            0.5,
    }
})