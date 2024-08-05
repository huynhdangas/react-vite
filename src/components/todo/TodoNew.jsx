import { useState } from "react"

const TodoNew = (props) => {
    // console.log('check props', props)
    const { AddNewTodo } = props
    // AddNewTodo() //thuc thi func

    const [valueInput, setValueInput] = useState('dang')

    const handleClick = () => {
        AddNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
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
            <div>
                My text input: {valueInput}
            </div>
        </>
    )
}

export default TodoNew;