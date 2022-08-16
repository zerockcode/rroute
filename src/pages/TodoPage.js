import React from 'react';

import TodoList from "../components/todo/TodoList";
import {Route, Routes, useMatch, useRoutes} from "react-router-dom";



function TodoPage(props) {


    console.log("todo page" )

    return (
        <div>
            <h1>Todo Page</h1>
            <Routes>
                <Route path={'list'}  element={<TodoList></TodoList>}>

                </Route>
            </Routes>
        </div>
    );
}

export default TodoPage;