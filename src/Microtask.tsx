import React from "react"
import st from "./Microtask.module.css";


type MicrotaskPropsType={
    cars:Array<CarsPropsType>
}

type CarsPropsType={
    manufacturer: string,
    model: string
}

export const Microtask=(props: MicrotaskPropsType)=>{
    return(
        <table className={st.tab}>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.cars.map((el, index)=>{
                return(
                    <tr key={index}>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
        </table>


    )
}