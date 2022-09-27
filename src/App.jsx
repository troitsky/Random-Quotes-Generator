import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [quotes, setQuotes] = useState([1,2 ])

  async function getQuotes() {
    let result = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    .then((response) => response.json())
    // .then(data =>  setQuotes(data.data))
    return result
  }

  async function updateQuotes() {
    console.log(await getQuotes().statusCode)
    setQuotes(await getQuotes().data)
  }

  function QuoteBlock() {

  }

  useEffect(() => {
    updateQuotes()
    
  }, [])

  return (
    <div className="App">
      <header>
        <button className='update_quote_btn'>random</button>
        <span className="update_icon material-symbols-outlined">autorenew</span>
      </header>
      <main className='main_container'>
        <h1 className="author_title"></h1>
        {quotes.map(quote => {
          return (<div className="quote_block">
            <div className="quote_highlight"></div>
            <p className="quote_text">{quote.quoteText}</p>
          </div>)
        })}
        <div className="info_block">
          <div>
            <h3 className="author"></h3>
            <p className="category"></p>
          </div>
          <span className="forward_icon material-symbols-outlined">east</span>
          <span class="pointer_icon material-symbols-outlined">touch_app</span>
        </div>
      </main>
    </div>
  )
}

export default App
