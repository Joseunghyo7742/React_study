import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams(); //react router의 변수 값을 넘겨 받음
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);

    setMovie(json.data.movie);

  };
 
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.large_cover_image}/>
      <h1>{movie.title}</h1>
    </div>
  );
}
export default Detail;
