const React = window.Pluginlib.React;
const ReactDOM = window.Pluginlib.ReactDOM;
const Route = window.Pluginlib.Route;
const BrowserRouter = window.Pluginlib.BrowserRouter

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