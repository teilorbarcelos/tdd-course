import React, { useEffect, useState } from "react"
import { Typography } from "@material-ui/core"
import { BookList } from "./components/BookList"
import { api } from "./services/api"

function App() {
  const [books, setBooks] = useState([])

  async function getBooks() {
    const booksResponse = await api.get('/books')
    setBooks(booksResponse.data)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        DevBook
      </Typography>

      <BookList books={books} />
    </>
  )
}

export default App
