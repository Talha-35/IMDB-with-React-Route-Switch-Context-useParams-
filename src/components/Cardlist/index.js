import { Card } from "../Card";
import { useContext } from 'react';
import {MovieContext} from '../../Movie';
import { StyledCardList } from "./CardList.style";


export const CardList = () => {

  const consumer = useContext(MovieContext);
  //  yada aşağıdaki gibi yapıp return içindeki consumer ları silebiliriz (destruction)
  // const { movieList, baseImageUrl } = useContext(MovieContext);

  if (consumer.loading){
    return <h2>Page Loading. . . </h2>
}


  return (
    <StyledCardList>
      {consumer.movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          image={consumer.baseImageUrl + movie.poster_path}
          date={movie.release_date}
          id={movie.id}
          // popularity = {popularity}
        />
      ))}
    </StyledCardList>
  );
};

//useEffect  - Axios ile data çekilecek
// gelen data usestate alınacak
// map ile ekrana basılacak
