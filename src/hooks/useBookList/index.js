import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function useBookList(initial = []) {
  const [books, setBooks] = useState(initial)
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

  return { books, loading, error }
}
