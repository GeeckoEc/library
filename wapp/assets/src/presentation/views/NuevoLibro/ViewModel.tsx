import React, {useState} from "react";

export const NuevoViewModel = () => {
    const [valores, definirValores] = useState({
        titulo:         '',
        autor:          '',
        genero:         '',
        publicacion:    '',
        idioma:         '',
    })

    const onChange = (propiedad: string, valor: any) => {
        definirValores({ ...valores, [propiedad]:valor})
    }

    const guardar = () => {
        console.log(JSON.stringify(valores))
    }

    return {
        ...valores, onChange, guardar
    }
}

export default NuevoViewModel;