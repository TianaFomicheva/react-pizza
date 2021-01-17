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

        const obj3 = {
            ...state,
            items: newItems,
          
        }
        console.log(obj3)
        return obj3
    }
    

        default: 
        return state
    }

    
}

export default cart