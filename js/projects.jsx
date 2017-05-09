/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React, ReactDOM, React.Component, console */

//======================================================
//CLASSES

//APP
class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state={};
    }
    
    render(){
        return(
            <section>
                <h2>
                    These are all Prototypes made on my spare time or in school,<br/>
                    While they should produce no errors, for the sake of excersize<br/>
                    not all functionallity you'd expect from a live webpage is there.<br/>
                    - Johan.
                </h2>
                <Project title={"title"} img={"img"} description={"desc"}/>
            </section>
        );
    }
}

class Project extends React.Component{
    render(){
        return(
            <div>
                <h3>this.props.title</h3>
                <img src={this.props.img} alt="cover"/>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

//=======================================================
//GLOBALS
let app = document.getElementById("App");
//=======================================================
//MAIN

ReactDOM.render(<App/>, app);

//=======================================================
//CALLBACKS

//=======================================================
//FUNCTIONS