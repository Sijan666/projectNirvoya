import React from 'react'

const Images = ({ imgSrc, className }) => {
    return (
        <img 
            className={`${className}`} 
            src={imgSrc} 
            alt="product-img" 
            loading = "lazy"
        />
    )
}

export default Images