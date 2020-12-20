
import MovieCard from './MovieCard';


const MovieList = ({ filtredMovie, setFilmSelection }) => {

    const selectId=(id)=>{
        setFilmSelection(filtredMovie.find((el)=>el.id===id))
    }

    return (
        <div className='cardGroup'>
            { filtredMovie.map((el, i) =>
                <MovieCard key={i}
                    title={el.title}
                    description={el.description}
                    posterUrl={el.posterUrl}
                    rate={el.rate}
                    id={el.id}
                    selectId={selectId} />)}
        </div>

    );
}
export default MovieList;