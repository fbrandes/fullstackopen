import {useAnecdotes} from './store'
import AnecdoteForm from "./components/AnecdoteForm.jsx";
import AnecdoteList from "./components/AnecdoteList.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
    const anecdotes = useAnecdotes()

    const vote = id => {
        console.log('vote', id)
    }

    return (
        <div>
            <Filter/>
            <h2>Anecdotes</h2>
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App