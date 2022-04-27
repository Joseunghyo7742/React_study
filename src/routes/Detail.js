import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams(); //react router의 변수 값을 넘겨 받음
  
  const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie-details.json?movie_id=${id}`)
      ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
