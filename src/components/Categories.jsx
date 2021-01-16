import React from 'react'

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
  // const [activeItem, setActiveItem] = React.useState(null)



  // const onSelectItem = (index) =>{
  //   setActiveItem(index)
  //   onClickItem(index)
  // }
    return (
        <div>
           <div className="categories">
              <ul>
                <li onClick={()=>onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items.map((name, index) =>  <li className={activeCategory === index ? 'active' : ''} key={`${name}_${index}`} onClick={()=>onClickCategory(index)}>{name}</li>)}
              </ul>
            </div> 
        </div>
    )
})

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories

