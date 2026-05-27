import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useField} from "../hooks/useField";
import {useAnecdotes} from "../hooks/useAnecdotes.jsx";

const CreateNew = ({ addAnecdote }) => {
  const { addAnecdotes } = useAnecdotes()
  const {reset: resetContent, ...content} = useField('text')
  const {reset: resetAuthor, ...author} = useField('text')
  const {reset: resetInfo, ...info} = useField('text')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addAnecdote({ content, author, info, votes: 0 })
    navigate('/')
  }

  const resetForm = (e) => {
    resetAuthor()
    resetContent()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <button>create</button>
        <button type='submit' onClick={resetForm}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
