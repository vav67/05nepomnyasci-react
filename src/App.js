import React from "react";
import { StrictMode } from 'react'
import {Header} from  './layout/Header'
import {Footer} from  './layout/Footer'
import {Main} from  './layout/Main'

function App()  {
  return (
      <StrictMode>
      <React.Fragment>
     <Header />
          <Main />
   <Footer />
    </React.Fragment>
      </StrictMode>
  )
}

//<div className="App"></div>
export default App;
