import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'



const App = () => {
    const name = 'Dang dep trai'
    const age = 25
    const address = {
        street: 'NTT',
        number: 12
    }

    const AddNewTodo = () => {
        alert(`ten toi la:`)
    }




    return (
        <>
            <div className="todo-container">
                <div className="todo-title">Todo list</div>
                <TodoNew
                    AddNewTodo={AddNewTodo}
                />
                <TodoData
                    name={name}
                    age={age}
                    address={address}
                />
                <div className='todo-image'>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </div>
            </div>
        </>
    );
};

export default App;
