import React, { useEffect, useState } from "react"
import { api } from "../../services/api"
import BookList from "../BookList"

export function BookListContainer() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function getBooks() {
    const booksResponse = await api.get('/books')
    setBooks(booksResponse.data)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setError(false)

    try {
      getBooks()
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <BookList books={books} />
  )
}
