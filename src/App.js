import './App.css';
import Productlist from './Product';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Bike", price:"250000", img:"Bike.jpeg"},{no:"2",name:"phone", price:"150000", img:"phone.png"}]}/>
    </div>
  );
}

export default App;