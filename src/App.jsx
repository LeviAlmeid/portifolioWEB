import { useState } from 'react'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'

import './styles/components/app.scss'

function App() {

  return (
    <>
      <div id='portifolio'>
        <h1>Levi Almeida</h1>
        <Sidebar />
        <MainContent />

      </div>
    </>
  )
}

export default App
