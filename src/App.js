import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Security from "./Security";
import Trading from "./Trading";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/security" component={Security} />
                    <Route path="/trading" component={Trading} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
