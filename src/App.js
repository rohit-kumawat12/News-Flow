import React, {Component} from "react";
import Navbar from './Component/Navbar';
import Newsbox from "./Component/Newsbox";
import './App.css';
import LoadingBar from 'react-top-loading-bar';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

class App extends Component {
    apiKey="ec8bc15a65c14414801f4188338fc12d";

    state={
        progress:0
    }

    setProgress = (progress)=>{
        this.setState({progress:progress});
    }

    render(){
        return(
            <BrowserRouter>
            <LoadingBar
                color='#f11946'
                progress={this.state.progress}
                // onLoaderFinished={() => setProgress(0)}
            />
            <Navbar />
            
            <Routes>
                <Route exact path="/" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="general" category="general" />}></Route>
                <Route exact path="/business" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="business" category="business" />}></Route>
                <Route exact path="/entertainment" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" category="entertainment" />}></Route>
                <Route exact path="/health" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="health" category="health" />}></Route>
                <Route exact path="/science" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="science" category="science" />}></Route>
                <Route exact path="/sports" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" category="sports" />}></Route>
                <Route exact path="/technology" element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" category="technology" />}></Route>
            </Routes>
            </BrowserRouter>
        )
    }
}

export  default App;