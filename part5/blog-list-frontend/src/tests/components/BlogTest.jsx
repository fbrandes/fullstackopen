import {render, screen} from '@testing-library/react'
import Blog from "../../components/Blog.jsx";

const blog = {
    title: 'Testing React',
    author: 'Jane Doe',
    url: 'https://example.com',
    likes: 5,
    user: {username: 'Jane'}
};

test('Blog information and number of likes are displayed to unauthenticated users, buttons are not displayed', () => {
    render(<Blog blog={blog}/>)

    const title = screen.getByText('Testing React: Jane Doe')
    expect(title).toBeVisible()

    const url = screen.getByText('https://example.com')
    expect(url).toBeVisible()

    const likes = screen.getByText('likes 5')
    expect(likes).toBeVisible()

    const button = screen.queryByRole('button', {name: 'like'})
    expect(button).toBeNull()
});

test('Authenticated users who are not the creator of the blog are shown only the like button', () => {
    render(<Blog blog={blog} loggedUser={{username: "Bob"}}/>)

    const url = screen.getByText('https://example.com')
    expect(url).toBeVisible()

    const likeButton = screen.queryByRole('button', {name: 'like'})
    expect(likeButton).toBeVisible()

    const removeButton = screen.queryByRole('button', {name: 'remove'})
    expect(removeButton).toBeNull()
});

test('The creator of the blog is shown the delete button', async () => {
    render(<Blog blog={blog} loggedUser={{username: "Jane"}}/>)

    const removeButton = screen.queryByRole('button', {name: 'remove'})
    expect(removeButton).toBeVisible()
});