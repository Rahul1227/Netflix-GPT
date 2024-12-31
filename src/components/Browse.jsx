
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTopRatedSeries from "../customHooks/useTopRatedSeries";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import Header from "./Header";


const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedSeries();

  

  return (
    <div className>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
