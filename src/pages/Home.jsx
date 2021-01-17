import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';
import LoadingBlock  from '../components/PizzaBlock/LoadingBlock';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'


const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые']
const sortItems = [{name:'популярности', type:'popular', order: 'desc'},{name:'цене', type:'price', order: 'asc'},{name:'палфавиту', type:'name', order: 'asc'}]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas})=> pizzas.items)
  const onSelectCategory = React.useCallback(index=>{dispatch(setCategory(index))},[])
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy} = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [])
  // const handleAddPizzaToCart = React.useCallback(obj=>{dispatch(addPizzaToCart(obj))},[])
  const handleAddPizzaToCart = obj =>{

    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
    // console.log(obj)
  }
    return (
        <div className="container">
        <div className="content__top">
          <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
          <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>  
        
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {isLoaded? items.map((obj) => (
              <PizzaBlock  onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} /> )): Array(12).fill(0) .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    )
}

export default Home
