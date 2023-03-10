import QuoteBox from './components/QuoteBox';
import React, { useEffect, useState } from 'react';

function App() {
    const [quote, setQuote] = useState(null)
    useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(json => {
            setQuote(json)
        });
    }, [])

    return (
        <div className="App">
            <QuoteBox quote={quote} setQuote={setQuote}/>
            <a href="https://github.com/Shadzzo" className='dev-name' target="_blank">By Shadzzo</a>
        </div>
    );
}

export default App;
