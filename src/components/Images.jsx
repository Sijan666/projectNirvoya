import React from 'react'

const Images = ({ imgSrc, className, loading = "lazy", fetchPriority = "auto" }) => {
    return (
        <img 
            className={`${className ?? ""}`} 
            src={imgSrc} 
            alt="product-img" 
            loading={loading} 
            fetchPriority={fetchPriority}
        />
    )
}

export default Images