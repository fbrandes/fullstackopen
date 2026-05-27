import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import anecdoteService from '../services/anecdotes'
import useNotification from "./useNotification.jsx";

export const useAnecdote = () => {

    const queryClient = useQueryClient()
    const { notify } = useNotification()

    const result = useQuery({
        queryKey: ['anecdotes'],
        queryFn: anecdoteService.getAll,
        retry: false
    })

    const newAnecdoteMutation = useMutation({
        mutationFn: anecdoteService.createNew,
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes'])
            queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
        },
        onError: (error) => {
            notify(error.message)
        }
    })

    const updateAnecdoteMutation = useMutation({
        mutationFn: (anecdote) => {
            return anecdoteService.update(anecdote.id, anecdote)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['anecdotes']})
        }
    })

    return {
        anecdotes: result.data,
        isPending: result.isPending,
        addAnecdote: (content) => newAnecdoteMutation.mutate(content),
        voteAnecdote: (anecdote) =>
            updateAnecdoteMutation.mutate({
                ...anecdote,
                votes: anecdote.votes + 1
            })
    }
}