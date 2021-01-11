import './App.css';

function SecretComponent() {
  return <h1>Super secret info for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone else can see this component.</h1>
}

function App(props) {
  if(props.authorized) {
    return <SecretComponent />;
  }
  else {
    return <RegularComponent />;
  }

}

export default App;
