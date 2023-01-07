import "./GenreList.css";
import MovieList from "./MovieList";
export default function GenreList(props) {
  return (
    <div className="genre">
      <h1 className="genre-title">{props.genreTitle}</h1>
      <div className="genre-list">
        <MovieList data={props.data} />
      </div>
    </div>
  );
}
