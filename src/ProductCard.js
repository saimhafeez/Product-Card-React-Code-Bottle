import React, { useState } from 'react'

import StarUnfilled from './StarUnfilled'
import StarHalfFilled from './StarHalfFilled'
import StarFilled from './StarFilled'

function ProductCard({
    images,
    name,
    price,
    salePrice,
    ratingStars,
    reviewsCount
}) {

    const [image, setImage] = useState(images[0]);

    const giveRating = () => {
        const stars = [];
        for (var i = 0; i < 5; i++) {
            if (i <= Math.floor(ratingStars)) {

                if (Math.floor(ratingStars) === i && ratingStars >= (Math.floor(ratingStars) + 0.4) && ratingStars <= (Math.floor(ratingStars) + 0.6)) {
                    stars.push(<StarHalfFilled key={i} />)
                } else {
                    stars.push(<StarFilled key={i} />)
                }

            } else {
                stars.push(<StarUnfilled key={i} />)
            }
        }
        return stars;
    }


    return (
        <div className='card'>
            <div className='image-container'>
                <img src={image} className='image--active' />
            </div>

            <div className='thumbnail-container'>
                {images.map((link, index) => {
                    return <img src={link} id={index} onClick={() => setImage(link)} />
                })}
            </div>

            <div className='info-container'>
                <h3>{name}</h3>
                <div className='flex flex-al-center'>
                    <div className='star'>
                        {giveRating()}
                    </div>
                    <p>({reviewsCount} reviews)</p>
                </div>

                <h2 className='salePrice'>$ {salePrice}</h2>

                <div className='flex flex-al-center'>
                    <p className='originalPrice'>$ {price}</p>
                    <p className='badge'>
                        Save {(100 - ((salePrice / price) * 100)).toFixed(1)}%
                    </p>
                </div>


            </div>

            <div className='buy-now'>
                Buy Now
            </div>

        </div>
    )
}

export default ProductCard