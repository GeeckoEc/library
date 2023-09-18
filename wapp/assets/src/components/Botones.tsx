import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, Pressable } from 'react-native';
import { AppColors } from '../presentation/theme/AppTheme';

interface Props {
    icono:       string,
    texto:       string,
    onPress:    () => void
}

export const BotonPrimario = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonPrimary}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

export const BotonSecundario = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonSecundario}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

export const BotonPeligro = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonPeligro}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    EstiloBotonPrimary:{
        width:              '100%',
        backgroundColor:    AppColors.primary,
        padding:            10, 
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,              // X
        flexDirection:      'row',          // X
        flex:               1,              // X
        justifyContent:     'center',       // X
    },
    EstiloBotonSecundario:{
        width:              '100%',
        backgroundColor:    AppColors.secondary,
        padding:            10, 
        justifyContent:     'center',
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,              // X
        flexDirection:      'row',          // X
        flex:               1,              // X
    },
    EstiloBotonPeligro:{
        width:              '100%',
        backgroundColor:    AppColors.danger,
        padding:            10, 
        justifyContent:     'center',
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,              // X
        flexDirection:      'row',          // X
        flex:               1,              // X
        borderStyle:        'solid',
        borderColor:        '#FFFFFF',
        borderWidth:        1,
    },
    EstiloTexto:{
        color:              '#FFFFFF',
        textAlign:          'center',
        marginStart:        10,
        fontWeight:         '700',          // X
        textTransform:      'uppercase',    // X
        marginTop:          3,              // X
    },
    EstiloIcono:{                           // X
        height:             24,             // X
        width:              24,             // X
        // marginEnd:          10,             // X
        tintColor:          '#FFFFFF',      // X
    }
})