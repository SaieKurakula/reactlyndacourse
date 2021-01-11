import './App.css';
import restaurant from './restaurant.gif'

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );

}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around!</p>
      <img src={restaurant} alt="Ninja turtles celebrating"/>
      <img src="https:github.com/saiekurakula.png" alt="Saie Kurakula"/>
      <ul>
        {props.dishes.map((dish) =>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return(
    <footer>
      <p>Copywright: {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Mac & Cheese",
  "Salmon",
  "Pork Chops",
  "Potato"
];

const dishObjects = dishes.map((dish, i)=>({id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Saie" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
