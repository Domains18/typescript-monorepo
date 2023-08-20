import React from 'react'
import { QueryPayload} from 'monorepo-typescript/src/server'




const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:5000/data", {})
            .then((response) => response.json())
            .then((data: QueryPayload)=> console.log(data.foo))
        }}
      >Click Me</button>
      {
        <style>
          {`
            button {
              display: block;
              width: 100px;
              height: 100px;
              position: absolute;
              top: 50%;
              left: 50%;
              cursor: pointer;
              background-color: red;
            }
          `}
        </style>
      }
    </div>
  )
}

export default App
