import { useDrop } from 'react-dnd';
import { useState } from 'react';
import Movie from './Movie';

const Basket = ({ onDrop }) => {

    const [basket, setBasket] = useState([])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'movie',
        drop: (item) => {
            setBasket([ ...basket, item ])
            onDrop(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <section id="basket" ref={dropRef}>
            {
                basket.map(item => (
                    <Movie key={item._id} movie={item} />
                ))
            }
        </section>
    )
}

export default Basket