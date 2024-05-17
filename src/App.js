import logo from './logo.svg';
import './App.css';
import Info from './Components/info';
import Contact from './Components/contact';
import Batches from './Components/batches';
import Movies from './Components/movies';

const Home = (props)=>{
  return(<>
  <h1>Home</h1>
  <h2>My Name is {props.myname}</h2>
  </>)
}

function About(props){
  return(<>
  <h1>About</h1>
  <h2>My Name is {props.myname}</h2>

  </>)
}

function App() {
  let arr = [{name : "PPA", price : 21000}, {name : "LB", price : 22000}, {name : "Angular", price : 19500}]

  let name = "Marvellous infosysytems";
  return (
    <div className="App">
     <h1>Inside App Component (Root Component)</h1>
     {/*<Contact myname = {name} />
     <Info/>
     <Home myname = "Angular" />
  <About myname = {name} />*/}

  {/*<Batches name = "PPA" price = "21000"/>
  <Batches name = "LB" price = "22000"/>
  <Batches name = "Angular" price = "19500"/>
<Batches name = "Paython" price = "18500"/>*/}
   
   {/*<Movies name = "YJHD" time = "9:30" />*/}

   {arr.map(item => <Batches name = {item.name} price = {item.price} />)}
    </div>
  );
}

export default App;
