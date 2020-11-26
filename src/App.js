import Movie from "./Movie";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NavBar from "./components/Navbar";
import FootBar from "./components/FootBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* Switch in dışına koyduğumuz her şey her durumda gözükür  */}
      <Switch>
        {/* iki switch arasında sadece birini çalıştırcak şekilde bir ona bir ona bir buna bak demektir. Switch üstten başlar aşağıya gider */}
        <Route path="/detail/:id" component={MovieDetails} exact />
        {/* birinci sayfa hangisi ise ona exact yazılır */}
        <Route path="/" component={Movie} />
      </Switch>
      <FootBar />
    </BrowserRouter>
  );
};

export default App;
