import {combineReducers} from 'redux'
import addTodo from './addTodo.js'
import showTodo from './showTodo.js'

const reducer=combineReducers(
    {addTodo,showTodo}
)
export default reducer