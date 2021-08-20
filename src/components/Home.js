import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <img className='homePic'/>
            <div className='homepage'>
                <h2>The food you want... when you want it!</h2>
                <Link to='/pizza'>
                    <button id='order-pizza' className='pizzaButton'>Pizza Time?</button>
                </Link>
            </div>
            <div className='delivery'>
                <h3>Food Delivery... the best thing since coding!</h3>
            </div>
            <div className='foodPlaces a'>
                <div className='group-place'>
                    <img className='mcdonalds' />
                    <div className='place'>
                        <h4>McDonald's</h4>
                        <p>$ - American - Fast Food - Burgers</p>
                        <button>20-30 Min</button>
                        <button>$5.99 Delivery Fee</button>
                    </div>
                </div>
                <div className='group-place'>
                    <img className='olive'/>
                    <div className='place'>
                        <h4>Olive Garden</h4>
                        <p>$$$ - Italian - Vegetarian Friendly</p>
                        <button>35-55 Min</button>
                        <button>$7.99 Delivery Fee</button>
                    </div>
                </div>
                <div className='group-place'>
                    <img className='mill'/>
                    <div className='place'>
                        <h4>Mill Street Deli</h4>
                        <p>$ - American - Soups</p>
                        <button>15-35 Min</button>
                        <button>$4.99 Delivery Fee</button>
                    </div>
                </div>
                <div className='group-place'>
                    <img className='rosies' />
                    <div className='place'>
                        <h4>Rosie's Mexican Cantina</h4>
                        <p>$$ - Mexican - Southwestern</p>
                        <button>30-50 Min</button>
                        <button>$6.99 Delivery Fee</button>
                    </div>
                </div>
                <div className='group-place'>
                    <img className='blue'/>
                    <div className='place'>
                        <h4>Blue Plate Cafe</h4>
                        <p>$ - American - Cafe</p>
                        <button>15-35 Min</button>
                        <button>$5.99 Delivery Fee</button>
                    </div>
                </div>
                <div className='group-place'>
                    <img className='viet' />
                    <div className='place'>
                        <h4>Viet Cuisine</h4>
                        <p>$ - Asian - Vietnamese</p>
                        <button>35-45 Min</button>
                        <button>$6.99 Delivery Fee</button>
                    </div>
                </div>
            </div>
        </>
    )
}