import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPeligro, BotonPrimario, BotonSecundario } from '../../../components/Botones';
import { FlatList, Image, SafeAreaView,StatusBar, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
//import useViewModel from './ViewModel';

const data = [
    {
        id:     '1',
        titulo: 'Límites',
        autor:  'Henry Cloud',
    },
    {
        id:     '2',
        titulo: 'monologos',
        autor:  'Dante Gebel',
    },
    {
        id:     '3',
        titulo: 'Bases de Datos',
        autor:  'Mercedes Marqués',
    },
    {
        id:     '4',
        titulo: 'Ingeniería de Software',
        autor:  'Ian Sommerville',
    },
    {
        id:     '5',
        titulo: 'Introducción a las Metodologías Ágiles',
        autor:  'Jorge Fernández González',
    },
]

type ItemProps = {titulo: string, autor: string,ver: ()=> void, eliminar: () => void, editar: () => void};

const editar = () => {
    console.log(JSON.stringify('editar'))
}


const Item = ({titulo, autor, ver, eliminar, editar}:ItemProps) => (
    <View style={estilos.EstiloItem}>
        <View style={{flex: 1,}}>
            <Text style={estilos.EstiloTitulo}>{titulo}</Text>
            <Text style={estilos.EstiloAutor}>{autor}</Text>
        </View>
        <View style={{ flex:1,flexDirection:'row'}}>
            <BotonPrimario
                icono="list-solid"
                texto="Detalles"
                onPress={ver}
            />
            <BotonPrimario
                icono="pen-solid"
                texto="Editar"
                onPress={editar}
            />
            <BotonPeligro
                icono="trash-alt"
                texto="Eliminar"
                onPress={eliminar}
            />
        </View>
    </View>
);

export const ListaScreen = () => {
    
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={estilos.EstiloContenedor}>
            <SafeAreaView style={estilos.EstiloContenedorLista}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <Item titulo={item.titulo} autor={item.autor} ver={()=> alert('No disponible.')} eliminar={ () => Navegacion.navigate('EliminarScreen')} editar={ () => Navegacion.navigate('EditarScreen')}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            
            <Image 
                style={estilos.EstiloFondo}
                source={require('../../../../images/lista.jpg')}
            />
        </View>
        
    )
};

const estilos = StyleSheet.create({
    EstiloContenedor:{
        flex:               1,
    },
    EstiloContenedorLista:{
        flex:               1,
        marginTop:          20,
        alignContent:       'center',
        position:           'absolute', 
        backgroundColor:    AppColors.background,
        width:              '100%',
        zIndex:             1000,
        paddingHorizontal:  20, 
    },
    EstiloItem:{
        paddingVertical:    5,
        paddingHorizontal:  10,
        backgroundColor:    AppColors.box,
        flexDirection:      'row',
        position:           "relative"
    },
    EstiloTitulo:{
        color:              AppColors.texto,
        fontWeight:         '700',
        textTransform:      'uppercase'
    },
    EstiloAutor:{
        color:              AppColors.primary
    },
    EstiloFondo:{
        width:              '100%',
        height:             '100%',
        opacity:            0.7,
        zIndex:             100
    }
});