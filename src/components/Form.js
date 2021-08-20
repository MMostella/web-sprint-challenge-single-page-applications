import React from 'react';

export default function Form(props) {
    return (
        <>
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
        </>
    )
}