import './App.css';
import Header from './Components/Header/Header';
import MenuSlide from './Components/Menu&Slide/Menu&Slide';
import MenuSearch from './Components/MenuSearch/MenuSearch';
import Partners from './Components/Partners/Partners';
import Submenu from './Components/Submenu/Submenu';
import TrendingProducts from './Components/TrendingProducts/TrendingProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <Submenu />
      <MenuSearch />
      <MenuSlide />
      <Partners />
      <TrendingProducts />
    </div>
  );
}

export default App;
