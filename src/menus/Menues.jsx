import React,{useState} from 'react'
import Data from './Data'
import Menu from './Menu'
import Categories from './Categories'

const Menues = () => {
    const [menuitems, setMenuItems] = useState(Data)
    const [categories, setCategories] = useState([])

    const filterItems = (category) => {
        if (category === 'all') {
          setMenuItems(Data);
          return;
        }
        const newItems = Data.filter((item) => item.category === category);
        setMenuItems(newItems);
      };

    return (
        <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
           <Categories filterItems={filterItems} categories={categories}  /> 
          <Menu items={menuitems} />
        </section>
      </main>
    )
}

export default Menues
