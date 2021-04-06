import {addTodo} from '../actions'
import {connect} from 'react-redux'

const AddTodo=({addTodoEve,todo})=>{
    let inputRef
    const onAddTodo=()=>{
        console.log('执行了')
        if(!inputRef.value.trim()){return}
        addTodoEve(inputRef.value)
        console.log(inputRef.value)
        inputRef.value=''
    }
    return(
        <>
            <form>
                <input ref={node=>inputRef=node}></input>
                <button type="button" onClick={onAddTodo}>添加任务</button>
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
export default connect(state=>({todo:state}),mapDispatchToProps)(AddTodo)