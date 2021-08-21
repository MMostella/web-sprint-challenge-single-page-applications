import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name must be at least 2 characters')
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
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),    
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTom: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    xtraCheese: yup.boolean(),
    gluten: yup.boolean(),
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