import React from "react"

interface CustomProps {
    type?:string,
    placeholder?:string,
    changeHandler?: (event:React.ChangeEvent<HTMLInputElement>) => void,
    name:string,
    value?:string
}

export default function Input(props:CustomProps){
    return (
        <>
            <input name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.changeHandler}/>
        </>
    )
}