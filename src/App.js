import React from "react"
import { Typography } from "@material-ui/core"

function App() {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >DevBook</Typography>
      <div data-test="bookList">
        <div className="bookItem">
          <h2 className="title">Refactoring</h2>
        </div>
        <div className="bookItem">
          <h2 className="title">Domain-driven design</h2>
        </div>
      </div>
    </>
  )
}

export default App
