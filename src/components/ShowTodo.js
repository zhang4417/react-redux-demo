import SelectTodo from './SelectTodo'
const visibleTodo={
    "show_all":"showAll",
    "non_complete":'nonComplete',
    "completed":"completed"
}



const ShowTodo=()=>{
    return (
    <>
        <SelectTodo filter={visibleTodo.show_all}>全部</SelectTodo>
        <SelectTodo filter={visibleTodo.non_complete}>未完成</SelectTodo>
        <SelectTodo filter={visibleTodo.completed}>已完成</SelectTodo>
    </>
    )
}

export default ShowTodo