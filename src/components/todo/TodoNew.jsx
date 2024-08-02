const TodoNew = (props) => {
    // console.log('check props', props)
    // const {AddNewTodo} = props
    // AddNewTodo() //thuc thi func

    const handleClick = () => {
        alert('click me')
    }

    const handleOnChange = (name) => {
        console.log('On change', name)
    }

    return (
        <>
            <div className='todo-new'>
                <input type="text"
                    onChange={(event) => handleOnChange(event.target.value)}
                />
                <button
                    onClick={handleClick}
                >Add</button>
            </div>
        </>
    )
}

export default TodoNew;