import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADING',
    payload
})

export const fetchPizzas =(category, sortBy)=>(dispatch)=> {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=asc`).then(({data})=>{
     dispatch(setPizzas(data))
    // console.log(data)
})
}
export const setPizzas =(items)=>({
    type: 'SET_PIZZAS',
    payload: items
    })

