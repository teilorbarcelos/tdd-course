import React from "react"
import { useBookList } from "../../hooks/useBookList"
import BookList from "../BookList"

export function BookListContainer() {
  const { books, loading, error } = useBookList()

  return (
    <BookList books={books} loading={loading} error={error} />
  )
}