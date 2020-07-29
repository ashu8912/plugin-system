import React from "react";
import Select from 'react-select';
const ReactDOM = window.Pluginlib.ReactDOM;
const Route = window.Pluginlib.Route;
const BrowserRouter = window.Pluginlib.BrowserRouter
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

class CustomPlugin extends React.Component{
  state={
      count: 0
  }
  incrementCount=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
  }
render(){
return (
<div>
{this.state.count}
<button onClick={this.incrementCount}>+</button>
Hello world
<App/>
</div>)
}
}

function Router(){
    return (
        <>
        <BrowserRouter>
        <Route path="/traceloop" component={CustomPlugin} exact={true}/>
        </BrowserRouter>
        </>
    )
}
ReactDOM.render(<Router/>,document.getElementById("plugin"))