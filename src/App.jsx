import { useEffect, useState } from 'react'
import { search } from './api/movie'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Movie from './componens/Movie'
import Basket from './componens/Basket'

const App = () => {

  const [ movies, setMovies ] = useState([])

  const load = async () => {
    const response = await search()
    setMovies(response.data.results)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
    <main>
      <section>
      {
        movies.map(movie => (
          <Movie movie={movie} key={movie._id} />
        ))
      }
      </section>
      <Basket onDrop={(movie) => setMovies(movies.filter(m => m._id !== movie._id))} />
    </main>
    </DndProvider>
  )
}

export default App
