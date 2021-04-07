import {addTodo} from '../actions'
import {connect} from 'react-redux'

const AddTodo=({addTodoEve,todo})=>{
    let inputRef
    const onAddTodo=(e)=>{
        e.preventDefault()
        if(!inputRef.value.trim()){return}
        addTodoEve(inputRef.value)
        console.log(inputRef.value)
        inputRef.value=''
    }
    return(
        <>
            <form onSubmit={onAddTodo}>
                <input type="text" ref={node=>inputRef=node}></input>
                <button type="submit">添加任务</button>
                <br/>
            </form>
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addTodoEve:(text)=>{dispatch(addTodo(text))}
    }
}
export default connect(state=>({todo:state.addTodo}),mapDispatchToProps)(AddTodo)