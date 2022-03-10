import React, {useState} from 'react';
import './App.css';
import './Microtask'
import {Microtask} from "./Microtask";
import {Button} from "./Components/Button";
import {NewComponent} from "./Components/NewComponent";
import st from "./Microtask.module.css";

export type FilterType='All' | 'RUBLS' | 'Dollars'

function App() {
    // TASK1
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    // TASK2
    const Button1 = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2 = (subscriber:string) => {
        console.log(subscriber)
    }

    //TASK3
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

    //TASK4
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const[filter, setFilter]=useState<FilterType>('All')

    let currentMoney = money;
    if(filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }
    if(filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }

    const onClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }


    return (
        <>
            <div className={st.task}>
                <h1>TASK1: Map method</h1>
                <Microtask cars={topCars} />
            </div>

            <div></div>

            <div>
                <h1>TASK2: Buttons</h1>
                <Button name={'YoutubeChanel-1'} callBack={()=>Button1('Alex', 22, 'Kiev')}/>
                <Button name={'YoutubeChanel-2'} callBack={()=>Button2('Serg')}/>
                {/*<button onClick={foo1}>1</button>*/}
                {/*<button onClick={()=>foo2(100200)}>2</button>*/}
            </div>

            <div>
                <h1>TASK3: UseState</h1>
                <h1 className={st.numberHeader}>{a}</h1>
                <button className={st.buttons} onClick={onClickHandlerA}>+</button>
                <button className={st.buttons} onClick={onClickHandlerB}>0</button>
                <button className={st.buttons} onClick={onClickHandlerC}>-</button>

            </div>

            <div>
                <h1>TASK4: Filter Method</h1>
                <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler} />
            </div>
        </>

    );
}

export default App