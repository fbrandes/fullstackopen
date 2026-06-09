import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Todo from './Todo'

describe('Todo component', () => {
  const mockTodo = {
    _id: '1',
    text: 'Test todo item',
    done: false
  }

  const mockDeleteTodo = vi.fn()
  const mockCompleteTodo = vi.fn()

  it('renders the todo text', () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    )

    expect(screen.getByText('Test todo item')).toBeInTheDocument()
  })

  it('displays info and buttons when todo is not done', () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    )

    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  it('shows correct info when the todo is done', () => {
    const doneTodo = { ...mockTodo, done: true }

    render(
      <Todo
        todo={doneTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    )

    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })

  it('calls deleteTodo when Delete is clicked', async () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    )

    await userEvent.click(screen.getByText('Delete'))
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo)
  })

  it('calls completeTodo when Set as done is clicked', async () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />
    )

    await userEvent.click(screen.getByText('Set as done'))
    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo)
  })
})
