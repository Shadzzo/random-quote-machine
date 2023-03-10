import { useState } from 'react';
import TwitterButton from './TwitterButton';

export default function QuoteBox ({quote, setQuote}) {
    const [rgb, setRgb] = useState("#" + Math.floor(Math.random() * 16777215).toString(16));
    const changeQuote = () => {
        fetch("https://api.quotable.io/random")
          .then(res => res.json())
          .then(json => {
            setQuote(json)
        });
        randomColor()
    }

    const randomColor = () => {
        setRgb('#' + Math.floor(Math.random() * 16777215).toString(16));
    }

    if(quote !== null){
        return ( 
            <div id='quote-box'>
                <p id='text' style={{color: rgb}}>{quote.content}</p>
                <p id='author' style={{color: rgb}}>- {quote.author}</p>
                <div className="button-wrapper">
                    <TwitterButton quote={quote} rgb={rgb}/>
                    <button id='new-quote' style={{backgroundColor: rgb}} onClick={() => changeQuote() }>New Quote</button>
                </div>
            </div>
        );
    }
}