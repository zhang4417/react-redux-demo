import { connect } from "react-redux"
import {toggleTodo} from "../actions"

const getSelectedTodo=(filter,todo)=>{
    switch(filter){
        case "ShowAll":
            return todo
        case "nonComplete":
            return todo.filter(item=>item.completed===false)
        case "completed":
            return todo.filter(item=>item.completed===true)
        default:
            return todo
    }
}

const TodoList=({todos,onToggleTodo})=>{
    return (
        <ul>
            {todos.map(item=>(
                <li 
                    key={item.id} 
                    style={{textDecoration:item.completed?'line-through':'none'}} 
                    onClick={()=>onToggleTodo(item.id)}
                >
                        {item.id}{item.text}
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps=(state)=>{
    return {todos:getSelectedTodo(state.showTodo,state.addTodo)}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onToggleTodo:(id)=>{dispatch(toggleTodo(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)