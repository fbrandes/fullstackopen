import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import {useAnecdotes} from "./hooks/useAnecdotes.jsx";

const App = () => {
    const {anecdotes} = useAnecdotes()
    const addAnecdote = () => {
    }

    return (
        <Router>
            <div>
                <h1>Software anecdotes</h1>
                <Menu/>
                <Routes>
                    <Route path="/" element={<AnecdoteList/>}/>
                    <Route path="/create" element={<CreateNew/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
