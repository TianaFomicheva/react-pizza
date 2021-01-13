import React from 'react'

function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = React.useState(null)
  const [count, setCount] = React.useState(0)


  const onSelectItem = (index) =>{
    setActiveItem(index)
    setCount(count + 1)
  }
    return (
        <div>
           <div className="categories">
              <ul>
                <li onClick={()=>onSelectItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
                {items.map((name, index) =>  <li className={activeItem === index ? 'active' : ''} key={`${name}_${index}`} onClick={()=>onSelectItem(index)}>{name}</li>)}
              </ul>
            </div> 
        </div>
    )
}

export default Categories

