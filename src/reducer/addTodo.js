const todos=(state=[],action)=>{
    switch(action.type){
        case "add_todo":
            return [...state,{id:action.id,text:action.text,completed:false}]
        case "toggle_todo":
            return [...state].map(item=>{
                if(item.id===action.id){item.completed=!item.completed}
                return item
            })
        default:
            return state
    }
}

export default todos