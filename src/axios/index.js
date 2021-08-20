import { v4 as uuid } from 'uuid'

const initialOrderValues = [
  {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTom: false,
    blackOlives: false,
    roastedGarlic: false,
    artHearts: false,
    threeCheese: false,
    pineapple: false,
    xtraCheese: false,
    special: '',
  }
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialOrderValues })
  },
  post(url, { name, size, pepperoni, sausage, canadianBacon, spicyItalianSausage, grilledChicken, onions,greenPepper, dicedTom, blackOlives, roastedGarlic, artHearts, threeCheese, pineapple, xtraCheese, special }) {
    const newOrder = { id: uuid(), name, size, pepperoni, sausage, canadianBacon, spicyItalianSausage, grilledChicken, onions,greenPepper, dicedTom, blackOlives, roastedGarlic, artHearts, threeCheese, pineapple, xtraCheese, special }
    return Promise.resolve({ status: 200, success: true, data: newOrder })
  }
}