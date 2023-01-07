import "./MovieList.css";
export default function MovieList(props) {
  return props.data.map((item) => {
    return (
      <div className="moviesList">
        <img src={item.image} />
        <div className="moviesList_detail">
          <div>{`${item.type} - ${item.year}`}</div>
          <div>{`${item.likePercent}%`}</div>
        </div>
        <div className="movie-name">{item.movieName}</div>
      </div>
    );
  });
  //   console.log(dd);
}
