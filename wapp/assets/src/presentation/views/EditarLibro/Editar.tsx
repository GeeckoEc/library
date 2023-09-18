import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPrimario, BotonSecundario } from '../../../components/Botones';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { Campo } from '../../../components/Campos';
import { Image, StyleSheet, View } from 'react-native';
import useViewModel from './ViewModel';

export const EditarScreen = () => {
    const {id, titulo, autor, genero, publicacion, idioma, onChange, actualizar} = useViewModel();
    
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={estilos.EstiloContenedor}>
            <StatusBar style='auto' />
            <Image 
                style={estilos.EstiloFondo}  
                source={require("../../../../images/editar.jpg")}
            />
            <View style={estilos.EstiloFormulario}>
                <Campo
                    icono       =       'book-reader-solid'
                    etiqueta    =       'Identificador'
                    consejo     =       ''
                    valor       =       {titulo}
                    propiedad   =       'titulo'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <Campo
                    icono       =       'book-solid'
                    etiqueta    =       'Título'
                    consejo     =       'Escribe el título del libro.'
                    valor       =       {titulo}
                    propiedad   =       'titulo'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <Campo
                    icono       =       'user-solid'
                    etiqueta    =       'Autor'
                    consejo     =       'Escribe el nombre del autor.'
                    valor       =       {autor}
                    propiedad   =       'autor'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <Campo
                    icono       =       'bookmark'
                    etiqueta    =       'Género'
                    consejo     =       'Escribe el dénero del libro.'
                    valor       =       {genero}
                    propiedad   =       'genero'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <Campo
                    icono       =       'calendar'
                    etiqueta    =       'Fecha de publicación'
                    consejo     =       'Escribe la fecha en que se publicó el libro.'
                    valor       =       {publicacion}
                    propiedad   =       'publicacion'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <Campo
                    icono       =       'language-solid'
                    etiqueta    =       'Idioma'
                    consejo     =       'Escribe el idioma en que está escrito el libro.'
                    valor       =       {idioma}
                    propiedad   =       'idioma'
                    teclado     =       'default'
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <View style={{flex:1, flexDirection: 'row',}} >
                    <BotonPrimario 
                        icono='save'
                        texto='Editar'
                        onPress={() => actualizar()}
                    ></BotonPrimario>
                    <BotonSecundario
                        icono='times-solid'
                        texto='Cancelar'
                        onPress={() => Navegacion.navigate('ListaScreen')}
                    ></BotonSecundario>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    EstiloContenedor: {
        flex:               1,
        backgroundColor:    AppColors.background,
        justifyContent:     'center',
    },
    EstiloFormulario: {
        width:              500,
        padding:            30,
        position:           'absolute',
        //bottom:             0,
        left:               '50%',
        marginLeft:         -250,
        backgroundColor:    AppColors.box,
    },
    EstiloFondo:{
        width:              '100%',
        height:             '100%',
        opacity:            0.5,
    }
})