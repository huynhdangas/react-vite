const TodoData = (props) => {
    console.log('check props', props)
    const {name, age, address} = props
    return (
        <>
            <div className='todo-data'>
                <div>{name}</div>
                <div>Learning react</div>
                <div>Watch react</div>
            </div>
        </>
    )
}

export default TodoData;