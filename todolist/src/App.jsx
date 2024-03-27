import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('A new thing')
    const thing = []
    const handleAddChange = () =>{
        
    }
    const addThing = (event) =>{
        event.preventDefault()
        console.log('button clicked', event.target)
    }

    const CreateNew = () =>{
        return(
            <div>
                <form onSubmit={addThing}>
                    <p>New to do list</p>
                    <input value={newThing}/>
                    <button type="submit">Add</button>
                </form>
            </div>

        )
    }
    return (
        <div>
            <h1>To Do List</h1>
            <CreateNew handleAdd={handleAdd}/>
        </div>
    )
}

export default App
