import {useAnecdoteActions} from "../store.js";

const AnecdoteForm = () => {
    const { add } = useAnecdoteActions()

    const handleAddAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value
        add(content)
        event.target.reset()
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleAddAnecdote}>
                <div>
                    <input name='anecdote'/>
                </div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm