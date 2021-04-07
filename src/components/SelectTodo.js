import {connect} from 'react-redux'
import {selectTodo} from '../actions'

const SelectedTodo=({filter,selectTodo,active,children})=>{
    return (
        <>
            <button onClick={()=>selectTodo(filter)} disabled={active}>{children}</button>
        </>
    )
}
const mapStateToProps=(state,ownProps)=>{
    return {active:state.showTodo===ownProps.filter}
}
const mapDispatchToProps=(dispatch)=>{
    return {selectTodo:(filter)=>{dispatch(selectTodo(filter))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedTodo)