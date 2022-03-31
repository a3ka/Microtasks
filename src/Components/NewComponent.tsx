import React, {useState} from "react";
import {FilterType} from "../App";
import {Button} from "./Button";

type MoneyPropsType={
    money:Array<MoneyType>
    onClickFilterHandler: (value: FilterType) => void
}

type MoneyType={
    banknots: string,
    value: number,
    number: string
}


export const NewComponent=(props: MoneyPropsType)=>{
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <Button name={'All'} callBack={()=>props.onClickFilterHandler('All')}/>
                <Button name={'RUBLS'} callBack={() => props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </>
    );
}

