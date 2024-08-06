import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
import Movie from "./Movie";
class App extends React.Component{

    render(){
        return <div>
            <h1>App.js With Class component</h1>
            <hr />
            <Header></Header>
            <hr />
            <Slider></Slider>
            <hr />
            <Footer></Footer>
            <hr />
            <Movie></Movie>
        </div>
    }
}
export default App