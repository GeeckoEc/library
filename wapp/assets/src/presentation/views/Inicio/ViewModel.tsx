import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";

export const InicioViewModel = () => {
    
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();


    const IrNuevo = () => {
        ()=>{Navegacion.navigate('NuevoScreen')}
    }

    const IrLista = () => {
        ()=>{Navegacion.navigate('ListaScreen')}
    }

    return {
        IrNuevo
    }
}

export default InicioViewModel;