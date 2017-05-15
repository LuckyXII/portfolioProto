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
            <section id="app-container">
                <Project info={musicSearch}/>
                <Project info={firebaseChat}/>
                <Project info={bookAPI}/>
                <Project info={westDate}/>
                
            </section>
        );
    }
}

class Project extends React.Component{
    render(){
        let info = this.props.info;
        return(
            <div className="wrapper">
                <h3 className="title">{info.title}</h3>
                <img className="cover" src={info.img} alt="cover"/>
                <p className="description">{info.description}</p>
                <p>{info.important}</p>
                <h4>For more info and further instructions please check out <a href="/aboutProjects.html">"Behind the scenes"</a></h4>
            </div>
        );
    }
}

//=======================================================
//GLOBALS
let app = document.getElementById("App");

var musicSearch={
    title: "MusicSearch",
    img: "/rescources/musicSearchCover.png",
    description:"Second group project also working with the Software Tester class, the idea was to use a lot of React and combine with API's and Firebase"
};
var firebaseChat={
    title: "Firebase Chat",
    img: "/rescources/firebaseChatCover.png",
    description:"Solo project to practise using NoSQL databases like Firebase"
};

var bookAPI={
    title: "BookAPI",
    img: "/rescources/bookAPICover.png",
    description:"solo project for using API's\n",
    important:"IMPORTANT: click the key to fetch a new API key before you start using it"
};

var westDate={
    title: "WestDate",
    img: "/rescources/westDateProjectCover.png",
    description:"Our first group project.The idea was to practise API's, Scrum, time planing and teamwork.\n",
    important: "IMPORTANT: This site has no real database. To test it efficiently:\n1:in the console print: localAddTestUsersToDatabase().\n2: register a new user or add generated ones by adding username admin and follow instructions.\n3: log in as a user(like Trump: email:trump@mail.com password:a123)"
};


//=======================================================
//MAIN

ReactDOM.render(<App/>, app);

//=======================================================
//CALLBACKS

//=======================================================
//FUNCTIONS