import React from 'react'

const App = () => {
  return (
    <div>
      <button>Click Me</button>
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
