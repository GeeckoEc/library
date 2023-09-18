import React, {useState} from "react";

export const EditarViewModel = () => {
    const [valores, definirValores] = useState({
        id:             '',
        titulo:         '',
        autor:          '',
        genero:         '',
        publicacion:    '',
        idioma:         '',
    })

    const onChange = (propiedad: string, valor: any) => {
        definirValores({ ...valores, [propiedad]:valor})
    }

    const actualizar = () => {
        console.log(JSON.stringify(valores))
    }

    return {
        ...valores, onChange, actualizar
    }
}

export default EditarViewModel;