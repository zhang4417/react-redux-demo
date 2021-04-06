import { connect } from "react-redux"
import {toggleTodo} from "../actions"

const TodoList=({todos,onToggleTodo})=>{
    return (
        <ul>
            {todos.map(item=>(
                <li 
                    key={item.id} 
                    style={{textDecoration:item.completed?'line-through':'none'}} 
                    onClick={()=>onToggleTodo(item.id)}
                >
                        {item.text}{item.id}
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps=(state)=>{
    return {todos:state}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onToggleTodo:(id)=>{dispatch(toggleTodo(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)