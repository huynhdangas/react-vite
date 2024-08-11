import { useState } from "react"

const TodoNew = (props) => {
    // console.log('check props', props)
    const { AddNewTodo } = props
    // AddNewTodo() //thuc thi func

    const [valueInput, setValueInput] = useState('')

    const handleClick = () => {
        AddNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <>
            <div className='todo-new'>
                <input type="text"
                    onChange={(event) => handleOnChange(event.target.value)}
                    value={valueInput}
                />
                <button
                    onClick={handleClick}
                >Add</button>
            </div>

        </>
    )
}

export default TodoNew;