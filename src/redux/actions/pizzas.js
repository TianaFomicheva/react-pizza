import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADING',
    payload
})

export const fetchPizzas =(category, sortBy)=>(dispatch)=> {    
    dispatch(setLoaded(false))
    axios.get(`/db.json`).then(({data})=>{
if(category !== null){
    let newarr = []
    let newdata = {}
    data['pizzas'].map(item=>{
        if(item['category'] == category){
            newarr.push(item)
    }})
    let sortRule = sortBy.type
    if(sortBy.order == 'asc'){

        newarr.sort((a,b)=>a[sortRule] > b[sortRule] ? 1 :-1)
    }else{
        newarr.sort((a,b)=>a[sortRule] < b[sortRule] ? 1 :-1)
    }

    newdata['pizzas'] = newarr    
    dispatch(setPizzas(newdata))
    

}else{
    let newarr = data['pizzas']
    let newdata = {}
    let sortRule = sortBy.type
    if(sortBy.order == 'asc'){

        newarr.sort((a,b)=>a[sortRule] > b[sortRule] ? 1 :-1)
    }else{
        newarr.sort((a,b)=>a[sortRule] < b[sortRule] ? 1 :-1)
    }
    newdata['pizzas'] = newarr    
    dispatch(setPizzas(newdata))
}

    
})

}
export const setPizzas =(items)=>({
    type: 'SET_PIZZAS',
    payload: items
    })

