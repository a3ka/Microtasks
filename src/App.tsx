import React, {useState} from 'react';
import './App.css';
import './Microtask'
import {Button} from "./Components/Button";
import {NewComponent} from "./Components/NewComponent";

import st from "./Microtask.module.css";



function App() {

    let [a, setA]=useState(1)

    const onClickHandlerA = () => {
      setA(++a);
    }
    const onClickHandlerB = () => {
        setA(0);
    }
    const onClickHandlerC = () => {
        setA(--a);
    }



    return (
        <>

                <h1 className={st.numberHeader}>{a}</h1>
                <button className={st.buttons} onClick={onClickHandlerA}>+</button>
                <button className={st.buttons} onClick={onClickHandlerB}>0</button>


        </>

    );
}

export default App