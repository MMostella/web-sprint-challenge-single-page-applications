import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    .homePic {
        background: url('https://picsum.photos/seed/picsum/2500/2500');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 500px;
    }

    .homepage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 275px;
    }

    .homepage h2 {
        font-size: 3rem;
    }

    .pizzaButton {
        width: 15%;
        height: 2.5em;
        font-size: 1em;
        font-weight: bold;
    }

    .delivery h3 {
        font-size: 1.5em;
    }

    .foodPlaces {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 95%;
        height: 600px;
    }

    .group-place {
        display: flex;
        flex-direction: column;
        width: 25%;
        height: 300px;
        margin: 2%;
    }

    .group-place img {
        height: 375px;
        background-position: center;
        border: 2.5px solid black;
        border-radius: 25px;
    }

    .place {
        margin: 1% 0 1% 5%;
    }

    .place h4 {
        font-weight: bold;
    }

    .place button {
        margin: 0 1%;
    }

    .mcdonalds {
        background: url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    .olive {
        background: url('https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbGlhbiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    .mill {
        background: url('https://images.unsplash.com/photo-1542128722-d6fe34923abc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdyYXB8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    .rosies {
        background: url('https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWV4aWNhbiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    .blue {
        background: url('https://images.unsplash.com/photo-1600688685721-852c38f6e8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhdnl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    .viet {
        background: url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjBmb29kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }

    .divider {
        border-bottom: 10px solid black;
    }
`

export default function Home() {
    return (
        <StyledHome>
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
        </StyledHome>
    )
}