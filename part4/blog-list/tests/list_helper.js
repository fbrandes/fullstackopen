const {test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        }
    ]

    const listWithMultipleBlogs = [
        {
            _id: '9937017861b4460898c45fed',
            title: 'No Silver Bullet',
            author: 'Frederick P. Brooks',
            url: 'https://www.cs.unc.edu/techreports/86-020.pdf?utm_source=chatgpt.com',
            likes: 56,
            __v: 0
        },
        {
            _id: 'd6fefb5939ee42249523bbc2',
            title: 'The Cathedral and the Bazaar',
            author: 'Eric S. Raymond',
            url: 'https://catb.org/~esr/writings/cathedral-bazaar/',
            likes: 89,
            __v: 0
        },
        {
            _id: '4eb44994265a4a15844179c1',
            title: 'Structure and Interpretation of Computer Programs',
            author: 'Abelson & Sussman',
            url: 'https://web.mit.edu/6.001/6.037/sicp.pdf',
            likes: 78,
            __v: 0
        }
    ]

    test('when list has no blogs, equals the likes of that', () => {
        const result = listHelper.totalLikes([])
        assert.strictEqual(result, 0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    test('when list has more than one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithMultipleBlogs)
        assert.strictEqual(result, 223)
    })
})