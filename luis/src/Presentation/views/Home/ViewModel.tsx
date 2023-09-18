import React, {useState} from "react";

export const HomeViewModel = () => {

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const onChange = (propiedad: string, value:any)=>{
        setValues({ ...values, [propiedad]:value})

    }
    return {...values, onChange}
}
export default HomeViewModel;