import React from 'react';

import styled from 'styled-components';

const StyledForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25%;
    border: 2px solid black;

    .title h3 {
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 1.5em;
    }

    .formPic {
        background: url('https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBpenphfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 400px;
        border: 2px solid black;
    }

    .titleCenter {
        font-size: 1.5em;
        margin-left: 3%;
    }

    .sizeh3 {
        background-color: lightgray;
        padding: 1% 0 1% 2%;
    }

    .pizzaSize {
        margin-left: 3%;
    }

    .pizzaSize select {
        width: 25%;
    }

    .sauceh3 {
        background-color: lightgray;
        padding: 1% 0 1% 2%;
    }

    .chooseSauce {
        display: flex;
        flex-direction: column;
        margin: 2%;
    }

    .chooseSauce label {
        margin: .5%;
    }

    .chooseSauce input {
        margin-right: 1%;
    }

    .toppingh3 {
        background-color: lightgray;
        padding: 1% 0 1% 2%;
    }

    .toppings {
        display: flex;
        flex-wrap: wrap;
        /* border: 1px solid red; */
    }

    .toppings label {
        /* border: 1px solid blue; */
        width: 45%;
        margin: .5% 1% .5% 1.5%;
        font-size: 1.2em;
    }

    .toppings label input {
        margin-right: 3%;
    }

    .substituteh3 {
        background-color: lightgray;
        padding: 1% 0 1% 2%;
    }

    .gluten {
        margin: 2%;
    }

    .gluten input {
        margin-right: 1.5%;
    }

    .specialh3 {
        background-color: lightgray;
        padding: 1% 0 1% 2%;
    }

    .special {
        display: flex;
        justify-content: center;
    }

    .special input {
        width: 90%;
        height: 50px;
        margin-bottom: 2%;
        font-size: 1.2em;
    }

    .buyerInfo {
        border-top: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buyerInfo h3 {
        margin-left: 3%;
    }

    .buyerInfo label {
        margin: 1%;
        width: 80%;
    }

    .buyerInfo input {
        margin-left: 1%;
    }

    .addOrder {
        display: flex;
        justify-content: center;
        border-top: 2px solid black;
        width: 91%;
        margin: 0 4.5% 0 4.5%;
        padding-top: 2%;
    }

    .addOrder label {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        margin-bottom: 3%;
    }

    .addOrder input {
        width: 30%;
    }

    .addOrder button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 65%;
        font-size: 1.2em;
    }
`

export default function Form(props) {
    return (
        <StyledForm>
            <form id='pizza-form'>
                    {/* onSubmit={onSubmit} */}
                <div className='title'>
                    <h3>Build Your Own Pizza</h3>
                </div>
                <div className='formPic'>
                    <img />
                </div>
                <h3 className='titleCenter'>Build Your Own Pizza</h3>
                <h3 className='sizeh3'>Choice of Size</h3>
                <label className='pizzaSize'>
                    <select 
                        name='size'
                        id='size-dropdown'
                        // value={values.size}
                        // onChange={change}
                    >
                        <option value=''>Select</option>
                        <option value='8inch'>8 Inch</option>
                        <option value='10inch'>10 Inch</option>
                        <option value='12inch'>12 Inch</option>
                    </select>
                </label>
                <h3 className='sauceh3'>Choice of Sauce</h3>
                <div className='chooseSauce'>
                    <label>
                        <input 
                            type='radio'
                            name='sauce'
                            value='red'
                            // onChange={change}
                            // checked={values.sauce === 'red'}
                        />Red
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='sauce'
                            value='garlicRanch'
                            // onChange={change}
                            // checked={values.sauce === 'garlicRanch'}
                        />Garlic Ranch
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='sauce'
                            value='bbq'
                            // onChange={change}
                            // checked={values.sauce === 'bbq'}
                        />BBQ Sauce
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='sauce'
                            value='spinachAlfredo'
                            // onChange={change}
                            // checked={values.sauce === 'spinachAlfredo'}
                        />Spinach Alfredo
                    </label>
                </div>
                <h3 className='toppingh3'>Add Toppings</h3>
                <div className='toppings'>
                    <label>
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            // checked={values.pepperoni}
                            // onChange={change}
                        />Pepperoni
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='sausage'
                            // checked={values.sausage}
                            // onChange={change}
                        />Sausage
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='canadianBacon'
                            // checked={values.canadianBacon}
                            // onChange={change}
                        />Canadian Bacon
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='spicyItalianSausage'
                            // checked={values.spicyItalianSausage}
                            // onChange={change}
                        />Spicy Italian Sausage
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='grilledChicken'
                            // checked={values.grilledChicken}
                            // onChange={change}
                        />Grilled Chicken
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='onions'
                            // checked={values.onions}
                            // onChange={change}
                        />Onions
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='greenPepper'
                            // checked={values.greenPepper}
                            // onChange={change}
                        />Green Pepper
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='dicedTom'
                            // checked={values.dicedTom}
                            // onChange={change}
                        />Diced Tomatoes
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='blackOlives'
                            // checked={values.blackOlives}
                            // onChange={change}
                        />Black Olives
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='roastedGarlic'
                            // checked={values.roastedGarlic}
                            // onChange={change}
                        />Roasted Garlic
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='artHearts'
                            // checked={values.artHearts}
                            // onChange={change}
                        />Artichoke Hearts
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='threeCheese'
                            // checked={values.threeCheese}
                            // onChange={change}
                        />Three Cheese
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='pineapple'
                            // checked={values.pineapple}
                            // onChange={change}
                        />Pineapple
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            name='xtraCheese'
                            // checked={values.xtraCheese}
                            // onChange={change}
                        />Extra Cheese
                    </label>
                </div>
                <h3 className='substituteh3'>Choice of Substitute</h3>
                <label className='gluten'>
                    <input 
                        type='radio'
                        name='gluten'
                        value='gluten'
                        // onChange={change}
                        // checked={values.gluten === 'gluten'}
                    />Gluten Free Crust (+ $10)
                </label>
                <h3 className='specialh3'>Special Instructions</h3>
                <label id='special-text' className='special'>
                    <input 
                        type='text'
                        name='extras'
                        // value={values.extras}
                        // onChange={change}
                        placeholder='Anything you would like to add?'
                    />
                </label>
                <div className='buyerInfo'>
                    <h3>Buyer Info</h3>
                    <label>Name 
                        <input 
                        type='text'
                        name='name'
                        id='name-input'
                        // value={values.Name}
                        // onChange={change}
                        placeholder='Input Name Here'
                        />
                    </label>
                    <label>Email 
                        <input 
                        type='email'
                        name='email'
                        id='email-input'
                        // value={values.Name}
                        // onChange={change}
                        placeholder='Input Email Here'
                        />
                    </label>
                    <label>Phone  
                        <input 
                        type='number'
                        name='phone'
                        id='phone-input'
                        // value={values.Name}
                        // onChange={change}
                        placeholder='Input Phone Number Here'
                        />
                    </label>
                </div>
                <div className='addOrder'>
                    <label>
                        <input 
                            type='number'
                            name='quantity'
                            // value={values.quantity}
                            // onChange={change}
                        />
                        <button id='order-button' >Add to Order</button>
                    </label>
                        {/* disabled={disabled} */}
                    {/* <button >Add to Order</button> */}
                </div>
            </form>
        </StyledForm>
    )
}