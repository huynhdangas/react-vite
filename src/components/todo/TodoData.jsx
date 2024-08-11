const TodoData = (props) => {
    const { todoList, deleteTodo } = props
    // const id1 = todoList.filter(todo =>
    //     todo.id === 2
    // )
    // const listTodo = todoList.map(todo => <div>
    //     {todo.name}
    // </div>)

    const handleDelete = (id) => {
        deleteTodo(id)
    }

    return (
        <>
            <div className='todo-data'>

                {todoList.map((item, index) => {
                    console.log('check item', item, index)
                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.name}</div>
                            <button onClick={() => { handleDelete(item.id) }}>Delete</button>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default TodoData;