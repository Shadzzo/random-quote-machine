import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';



export default function TwitterButton({quote, rgb}) {
    const [twitterUrl, setTwitterUrl] = useState()
    useEffect(() => {
        setTwitterUrl("https://twitter.com/intent/tweet?hashtags=quotes&text=" + "'" + quote.content + "'" + " " + quote.author)
        document.body.style.backgroundColor = rgb;
    }, [quote])
    
    return (
        <div>
            <a id='tweet-quote' target="_blank" rel="noreferrer" href={twitterUrl} >                
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className='twitter-icon' style={{color: rgb}} />
            </a>
        </div>
    );
}