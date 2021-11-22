import React from 'react'

function Avatar({ url, className }) {
    return (
        <img loading="lazy"
            className={`h10 w-10 rounded-full cursor-pointer transition-all transform hover:scale-110 animate-bounce ${className}`}
            src={url} alt='My profile' />
    )
}
export default Avatar;
