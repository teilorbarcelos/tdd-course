import React from "react"
import { Typography } from "@material-ui/core"

function App() {
  const books = [
    {
      name: 'Refactoring'
    },
    {
      name: 'Domain-driven design'
    }
  ]

  const RenderBooks = (books) => {
    return (
      <div data-test="bookList">
        {
          books.map(book =>
            <div className="bookItem">
              <Typography
                variant="h5"
                component="h5"
                data-test="heading"
              >
                {book.name}
              </Typography>
            </div>
          )
        }
      </div>
    )

  }

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        DevBook
      </Typography>

      {
        RenderBooks(books)
      }
    </>
  )
}

export default App
