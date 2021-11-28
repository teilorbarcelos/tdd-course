import React from "react"
import { Typography } from "@material-ui/core"
import { BookList } from "./components/BookList"

function App() {
  const books = [
    {
      name: 'Refactoring'
    },
    {
      name: 'Domain-driven design'
    }
  ]

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
