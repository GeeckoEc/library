import React, {useState} from "react";
export const UpdateRegisterViewModel = () => {
    const [values, setValues] = useState({
        Nombre:'',
        Direccion:'',
        Ciudad:'',
        Capacidad:'',
        TipoCocina:''
    })
    const onChange = (propiedad: string, value:any)=>{
        setValues({ ...values, [propiedad]:value})
    }
    const register = ()=>{
        alert(JSON.stringify(values))
    }
    return {...values, onChange, register}
}
export default UpdateRegisterViewModel;