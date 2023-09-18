import React, {useState} from "react";

export const NuevoViewModel = () => {
    const [valores, definirValores] = useState({
        id:         '',
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({ ...valores, [propiedad]:valor})
    }

    const eliminar = () => {
        console.log(JSON.stringify(valores))
    }

    return {
        ...valores, onChange, eliminar
    }
}

export default NuevoViewModel;