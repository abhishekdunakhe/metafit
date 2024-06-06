
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Card from './Card';
// import Slider_2 from './Slider_2';
import Fitness_AI from './Fitness_AI';
import Input_with_image from './Input_with_image';
import List from './LIst';
// import Work from './Work';
import Footer from './Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARDS_DATA } from './utils/constant';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <Card data={CARDS_DATA}/>
        {/* <Slider_2/> */}
        <Fitness_AI/>
        <Input_with_image/>
        <List listdata={CARDS_DATA.list[0]}/>
        <List listdata={CARDS_DATA.list[1]} />
        {/* <Work/> */}
        <Footer/>
    </div>
  );
}

export default App;
