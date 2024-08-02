const TodoNew = (props) => {
    console.log('check props', props)
    const {AddNewTodo} = props
    AddNewTodo('Dang dep trai') //thuc thi func
    return (
        <>
        <div className='todo-new'>
                    <input type="text" />
                    <button>Add</button>
                </div>
        </>
    )
}

export default TodoNew;