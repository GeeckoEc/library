import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppColors } from '../../theme/AppTheme';
import { BotonPeligro, BotonSecundario } from '../../../components/Botones';

export const EliminarScreen = () => {
    <StatusBar style='auto' />
    const {id, onChange,eliminar} = useViewModel();
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={estilos.EstiloContainer} >
            <Image 
                style={estilos.EstiloFondo}
                source={require('../../../../images/eliminar.jpg')}
            />
            <View style={estilos.EstiloFormulario}>
                <Text style={estilos.EstiloTitulo}>
                    Eliminar Libro
                </Text>
                <Text style={estilos.EstiloMensaje}>
                    ¿Está seguro de que desea continuar con el proceso?
                </Text>
                <View style={{flexDirection:'row'}}>
                    <BotonPeligro 
                        icono='trash-alt'
                        texto='Eliminar'
                        onPress={eliminar}
                    />
                    <BotonSecundario 
                        icono='times-solid'
                        texto='Cancelar'
                        onPress={() => Navegacion.navigate('ListaScreen')}
                    />
                </View>
            </View>
        </View>
    )
    
}

const estilos = StyleSheet.create({
    EstiloContainer:{
        flex:               1,
        justifyContent:     'center'
    },
    EstiloFormulario:{
        backgroundColor:    AppColors.danger,
        width:              400,
        padding:            30,
        position:           'absolute',
        left:               '50%',
        marginLeft:         -200
    },
    EstiloTitulo: {
        fontSize:           30,
        color:              '#FFFFFF',
        fontWeight:         '700',
        marginVertical:     30,
        textAlign:          'center'
    },
    EstiloMensaje:{
        color:              '#FFFFFF',
        textAlign:          'center',
        marginBottom:       20,
    }, EstiloFondo:{
        width:              '100%',
        height:             '100%',
        opacity:            1,
    }
})