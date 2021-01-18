const initialState ={
    items: {},
    totalPrice: 0,
    totalCount: 0
}

  
const cart = (state = initialState, action)=>{
    switch(action.type){

        case 'ADD_PIZZA_CART': {           
            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                  items: currentPizzaItems,
                  
                },
              };    
                    const pizzasCountItemsLength = Object.values(newItems).map(item=>item['items'].length)
                    const pizzasCountItem = Object.values(newItems).map(item=>item['items'])
                let startSum = 0
                const PriceSumObject =      pizzasCountItem.map(item=>item.map(item=>startSum + item.price))
                
                const arrForSum = Object.values(Object.values(PriceSumObject))
                const arrSum = arrForSum.map(item=>item.reduce((count, curNumber)=>count+parseInt(curNumber,0)))

        const obj3 = {
            ...state,
            items: newItems,
            totalCount: pizzasCountItemsLength.reduce((count, curNumber)=>count+curNumber,0),
            totalPrice: arrSum.reduce((count, curNumber)=>count+curNumber,0),

          
        }
        return obj3
    }
    

        default: 
        return state
    }

    
}

export default cart