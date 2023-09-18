import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";

export const NuevoViewModel = () => {
    const [valores, definirValores] = useState({
        id:         '',
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({ ...valores, [propiedad]:valor})
    }

    const eliminar = () => {
        
        const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
        Navegacion.navigate('EliminarScreen')
        //console.log(JSON.stringify(valores))
    }

    return {
        ...valores, onChange, eliminar
    }
}

export default NuevoViewModel;