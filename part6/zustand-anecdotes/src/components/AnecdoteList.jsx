import {useAnecdoteActions, useAnecdotes, useFilter} from "../stores/AnecdoteStore.jsx";
import {useNotificationActions} from "../stores/NotificationStore.jsx";

const AnecdoteList = () => {
    const anecdotes = useAnecdotes().toSorted((a, b) => b.votes - a.votes)
    const { vote, remove } = useAnecdoteActions()
    const filter = useFilter()
    const { setNotification } = useNotificationActions()

    const filteredAnecdotes = anecdotes.filter((anecdote) => (
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    ))

    return (
        <>
            {filteredAnecdotes.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            vote(anecdote.id)
                            setNotification(`You voted for '${anecdote.content}'`)
                        }}>
                            vote
                        </button>
                        {anecdote.votes === 0 && (
                            <button onClick={() => remove(anecdote.id)}>delete</button>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default AnecdoteList