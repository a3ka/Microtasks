import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";


export type FilterType='All' | 'RUBLS' | 'Dollars'

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

const addMessage=(title:string)=>{
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
}

// TASK 2
    let[title, setTitle]=useState('')
    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }

    return (
        <>
            <div className={'App'}>
                <h1>FullInput</h1>
                <FullInput addMessage={addMessage}/>
                {/*<div>*/}
                {/*    <input/>*/}
                {/*    <button>+</button>*/}
                {/*</div>*/}
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

            <div>
                <h1>Input+Button</h1>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </>


    );
}

export default App