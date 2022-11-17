import { useDrag } from 'react-dnd'

const Movie = ({ movie }) => {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'movie',
        item: { _id: movie._id, title: movie.title, image: movie.image },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    

    return (
        <article ref={dragRef}>
            <p>
                { movie.title }
                { isDragging && '😱' }
            </p>
            <img src={movie.image} alt={movie.title} />
        </article>
    )
}

export default Movie