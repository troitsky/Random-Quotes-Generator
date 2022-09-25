import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <button className='update_quote_btn'>random</button>
        <span className="update_icon material-symbols-outlined">autorenew</span>
      </header>
      <main className='main_container'>
        <h1 className="author_title">Bill Gates</h1>
        <div className="quote_block">
          <div className="quote_highlight"></div>
          <p className="quote_text">“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”</p>
        </div>
        <div className="info_block">
          <div>
            <h3 className="author">Bill Gates</h3>
            <p className="category">Business</p>
          </div>
          <span className="forward_icon material-symbols-outlined">east</span>
          <span class="pointer_icon material-symbols-outlined">touch_app</span>
        </div>
      </main>
    </div>
  )
}

export default App
