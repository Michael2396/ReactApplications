import React, {useContext} from 'react'
import {DataAccount} from "../App";
import Sidebar from "./sidebar";


const Account = () => {
    const stateContext = useContext(DataAccount);
    const {state, setState} = stateContext;
    let objTask = {};
    let keyObj;
    let column;
    let startColumn;
    const dragStartHandler = (e, key, columnName) => {
        startColumn = columnName;
        column = columnName;
        objTask = {
            [key]: {...state.taskList[column][key]}
        }
        keyObj = key;
    };

    const dropHandler = (e, key, columnName) => {
        e.preventDefault();
    };
    const dragOverHandler = (e) => {
        e.preventDefault();
    };
    const dropCardHandler = (e) => {
        e.preventDefault();
        let nameCardList = e.target.getAttribute("data-card");
        let cardList = {...state};
        let thisCardList = {...cardList.taskList[nameCardList], ...objTask}
        cardList.taskList[nameCardList] = {...thisCardList};
        delete cardList.taskList[startColumn][keyObj];
        setState(cardList);
    };
    return (
        <div className={'account-user'}>
            <Sidebar/>
            <div className={'todo'}>
                <div className={"item"}>
                    <h3>New</h3>
                    <ul className="task-list new" data-card={'new'}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e)}
                    >
                        {Object.keys(state.taskList.new).map((key) => (
                            <li key={key} className={'task'} draggable={true} data-key={key} data-card={'new'}
                                onDragStart={(e) => dragStartHandler(e, key, 'new')}
                                onDrop={(e) => dropHandler(e, key, 'new')}
                                onDragOver={(e) => dragOverHandler(e)}
                            >
                                <div className={'title'}>{state.taskList.new[key].title}</div>
                                <div className={'text'}>{state.taskList.new[key].description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"item"}>
                    <h3>QA</h3>
                    <ul className="task-list qa" data-card={'qa'}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e)}
                    >
                        {Object.keys(state.taskList.qa).map((key) => (
                            <li key={key} className={'task'} draggable={true} data-card={'qa'}
                                onDragStart={(e) => dragStartHandler(e, key, 'qa')}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, key, 'qa')}
                            >
                                <div className={'title'}>{state.taskList.qa[key].title}</div>
                                <div className={'text'}>{state.taskList.qa[key].description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"item"}>
                    <h3>Done</h3>
                    <ul className="task-list done" data-card={'inWork'}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e)}
                    >
                        {Object.keys(state.taskList.inWork).map((key) => (
                            <li key={key} className={'task'} draggable={true} data-card={'inWork'}
                                onDragStart={(e) => dragStartHandler(e, key, 'inWork')}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, key, 'inWork')}
                            >
                                <div className={'title'}>{state.taskList.inWork[key].title}</div>
                                <div className={'text'}>{state.taskList.inWork[key].description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Account;