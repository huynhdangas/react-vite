const TodoData = (props) => {
    const { todoList } = props
    // const id1 = todoList.filter(todo =>
    //     todo.id === 2
    // )
    // const listTodo = todoList.map(todo => <div>
    //     {todo.name}
    // </div>)
    return (
        <>
            <div className='todo-data'>

                {todoList.map((item, index) => {
                    console.log('check item', item, index)
                    return (
                        <div className="todo-item">
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default TodoData;