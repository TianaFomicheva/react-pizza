import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';
import LoadingBlock  from '../components/PizzaBlock/LoadingBlock';
import { fetchPizzas } from '../redux/actions/pizzas';
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые']
const sortItems = [{'name':'популярности', type:'popular'},{'name':'цене', type:'price'},{'name':'палфавиту', type:'alfabet'}]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas})=> pizzas.items)
  const onSelectCategory = React.useCallback(index=>{dispatch(setCategory(index))},[dispatch])
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category} = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas(category));
  }, [category]);

    return (
        <div className="container">
        <div className="content__top">
          <Categories onClickItem={onSelectCategory} items={categoryNames}/>
          <SortPopup items={sortItems}/>  
        
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock               
                key={obj.id}
                
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    )
}

export default Home
