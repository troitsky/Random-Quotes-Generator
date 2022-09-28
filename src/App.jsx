import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [quotes, setQuotes] = useState(null)
  const [singleQuoteMode, setSingleQuoteMode] = useState(true)
  const [authorMode, setAuthorMode] = useState(false)
  const [author, setAuthor] = useState(null)
  const [genre, setGenre] = useState(null)

  async function getRandomQuote() {
    const result = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    const data = await result.json()
    setQuotes(data.data)
    setAuthor(data.data[0].quoteAuthor)
    setGenre(data.data[0].quoteGenre)
    setSingleQuoteMode(true)
    setAuthorMode(false)
  }
  
  async function getAuthorQuotes() {
    const result = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
    const data = await result.json()
    setQuotes(data.data)
    setSingleQuoteMode(false)
    setAuthorMode(true)
  }
  
  async function getGenreQuotes() {
    const result = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?genre=${genre}`)
    const data = await result.json()
    setQuotes(data.data)
    setSingleQuoteMode(false)
    setAuthorMode(false)
  }


  useEffect(() => {
    getRandomQuote()
  }, [])
  
  return (
    <div className="App">
      <header>
        <button className='update_quote_btn' onClick={getRandomQuote}>random
          <span className="update_icon material-symbols-outlined">autorenew</span>
        </button>
      </header>
      <main className='main_container'>
        {/* "quotes &&" are needed to prevent crashing during initial render before json data was fetched */}
        <h1 className="author_title">{authorMode && author}</h1>
        {quotes && quotes.map(quote => {
          return (<div className="quote_block">
            <div className="quote_highlight"></div>
            <p className="quote_text">{quote.quoteText}</p>
          </div>)
        })}
        {singleQuoteMode && (
          <div className="info_block">
            <div>
              <h3 className="author" onClick={getAuthorQuotes}>{author}</h3>
              <p className="category" onClick={getGenreQuotes}>{genre}</p>
            </div>
            <span className="forward_icon material-symbols-outlined">east</span>
          </div>)}
      </main>
    </div>
  )
}

export default App
