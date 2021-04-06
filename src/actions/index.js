let idCreator=0
export const addTodo=(text)=>{
    return {type:'add_todo',text,id:idCreator++}
}

export const toggleTodo=(id)=>{
    return {type:"toggle_todo",id}
}