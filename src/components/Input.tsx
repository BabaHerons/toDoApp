import React from "react"

interface CustomProps {
    type?:string,
    placeholder?:string,
    changeHandler?: (event:React.ChangeEvent<HTMLInputElement>) => void,
    name:string
}

export default function Input(props:CustomProps){
    return (
        <>
            <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.changeHandler}/>
        </>
    )
}