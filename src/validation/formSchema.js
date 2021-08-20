import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    phone: yup
        .string()
        .trim()
        .required('Phone number is required')
        .min(10, 'Must be a valid phone number'),
    size: yup
        .string()
        .required('Size is required'),
    sauce: yup
        .string()
        .required('Sauce is required'),
    pepperoni: yup.boolean().oneOf([true]),
    sausage: yup.boolean().oneOf([true]),
    canadianBacon: yup.boolean().oneOf([true]),    
    spicyItalianSausage: yup.boolean().oneOf([true]),
    grilledChicken: yup.boolean().oneOf([true]),
    onions: yup.boolean().oneOf([true]),
    greenPepper: yup.boolean().oneOf([true]),
    dicedTom: yup.boolean().oneOf([true]),
    blackOlives: yup.boolean().oneOf([true]),
    roastedGarlic: yup.boolean().oneOf([true]),
    artHearts: yup.boolean().oneOf([true]),
    threeCheese: yup.boolean().oneOf([true]),
    pineapple: yup.boolean().oneOf([true]),
    xtraCheese: yup.boolean().oneOf([true]),
    gluten: yup.boolean().oneOf([true]),
    special: yup
        .string()
        .trim(),
    quantity: yup
        .string()
        .trim()
        .required('Must choose number of pizzas')
        .min(1, 'Must order at least 1'),
})

export default formSchema;