import { Typography } from "@material-ui/core"

export function BookList({ books }) {
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