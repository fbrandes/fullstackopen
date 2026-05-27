import { useAnecdote } from '../hooks/useAnecdotes'
import useNotification from "../hooks/useNotification";

const AnecdoteList = () => {
    const { anecdotes, voteAnecdote } = useAnecdote()
    const { notify } = useNotification()

    const handleVote = (anecdote) => {
        voteAnecdote(anecdote)

        notify(`anecdote ${anecdote.content} voted`)
    }

    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AnecdoteList