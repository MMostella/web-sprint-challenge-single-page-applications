import React from 'react';
import styled from 'styled-components';

const StyledComplete = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    .orderDetails {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 4px solid lightgray;
        border-radius: 25px;
        width: 30%;
        padding: 2% 0;
    }

    .pizzaSize {
        margin-bottom: 2%;
    }

    .meats {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
    }
    p {
        text-decoration: underline;
    }

    .special {
        display: flex;
        justify-content: center;
        border: 1px solid black;
        width: 50%;
        padding: 1%;
    }

    .customer div {
        margin: 3% 0;
    }
`

export default function({ values }) {
    
    return (
        <StyledComplete>
            <div>
                <img />
                <h1>Congrats! Pizza is on the way!</h1>
            </div>
            <div className='orderDetails'>
                <h2>Order Details</h2>
                <div className='pizzaSize'>
                    {'Size: '}{values.size === '8inch' ? '8 Inch' : '' }
                    {values.size === '10inch' ? '10 Inch' : '' }
                    {values.size === '12inch' ? '12 Inch' : '' }
                </div>
                <div className='pizzaSauce'>
                    {'Sauce: '}{values.sauce === 'red' ? 'Red' : ''}
                    {values.sauce === 'garlicRanch' ? 'Garlic Ranch' : ''}
                    {values.sauce === 'bbq' ? 'BBQ' : ''}
                    {values.sauce === 'spinachAlfredo' ? 'Spinach Alfredo' : ''}
                </div>
                <h3>Toppings</h3>
                <p>Meats</p>
                <div className='meats'>
                    <ul>
                        <li>{values.pepperoni === true ? 'Pepperoni' : ''}</li>
                        <li>{values.sausage === true ? 'Sausage' : ''}</li>
                        <li>{values.canadianBacon === true ? 'Canadian Bacon' : ''}</li>
                        <li>{values.spicyItalianSausage === true ? 'Spicy Italian Sausage' : ''}</li>
                        <li>{values.grilledChicken === true ? 'Grilled Chicken' : ''}</li>
                    </ul>
                </div>
                <p>Vegetables</p>
                <div className='veg'>
                    <ul>
                        <li>{values.onions === true ? 'Onions' : ''}</li>
                        <li>{values.greenPepper === true ? 'Green Peppers' : ''}</li>
                        <li>{values.dicedTom === true ? 'Diced Tomatoes' : ''}</li>
                        <li>{values.blackOlives === true ? 'Black Olives' : ''}</li>
                        <li>{values.roastedGarlic === true ? 'Roasted Garlic' : ''}</li>
                        <li>{values.artHearts === true ? 'Artichoke Hearts' : ''}</li>
                        <li>{values.pineapple === true ? 'Pineapple' : ''}</li>
                    </ul>
                </div>
                <p>Cheese</p>
                <div className='cheese'>
                    <ul>
                        <li>{values.threeCheese === true ? 'Three Blend Cheese' : ''}</li>
                        <li>{values.xtraCheese === true ? 'Extra Cheese' : ''}</li>
                    </ul>
                </div>
                <p>Gluten</p>
                <div>
                    {values.gluten === true ? 'Gluten Crust (+$10)' : 'Not Gluten'}
                </div>
                <p>Special Instructions</p>
                <div className='special'>
                    {values.special}
                </div>
                <h2>Customer Info</h2>
                <div className='customer'>
                    <div>
                        {'Name: '}{values.name}
                    </div>
                    <div>
                        {'Email: '}{values.email}
                    </div>
                    <div>
                        {'Phone: '}{values.phone}
                    </div>
                </div>
            </div>
        </StyledComplete>
    )
}