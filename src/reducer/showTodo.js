const showTodo=(state='ShowAll',action)=>{
    switch(action.type){
        case 'select_todo_type':
            return action.filter
        default:
            return state
    }
}

export default showTodo