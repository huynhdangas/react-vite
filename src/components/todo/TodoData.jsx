const TodoData = (props) => {
    console.log('check props', props)
    const { name, age, address, todoList } = props
    // const id1 = todoList.filter(todo =>
    //     todo.id === 2
    // )
    const listTodo = todoList.map(todo => <div>
        {todo.name}
    </div>)
    return (
        <>
            <div className='todo-data'>
                <div>{name}</div>
                <div>Learning react</div>
                <div>Watch react</div>
                {listTodo}
                <div>{JSON.stringify(todoList)}</div>
            </div>
        </>
    )
}

export default TodoData;