import './App.css';
import Header from './Components/Header/Header';
import MenuSlide from './Components/Menu&Slide/Menu&Slide';
import MenuSearch from './Components/MenuSearch/MenuSearch';
import Submenu from './Components/Submenu/Submenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Submenu />
      <MenuSearch />
      <MenuSlide />
    </div>
  );
}

export default App;
