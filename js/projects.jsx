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
                <Footer/>
            </section>
        );
    }
}

class Project extends React.Component{
    render(){
        let info = this.props.info;
        return(
            <div className="wrapper">
                <h3 className="title"><a href={info.href} target="_blank">{info.title}</a></h3>
                <img className="cover" src={info.img} alt="cover"/>
                <p className="description">{info.description}</p>
                <p className="note"><strong>IMPORTANT:</strong> {info.important}</p>
                <h4>For more info and further instructions please check out <a href="/aboutProjects.html">"Behind the scenes"</a></h4>
            </div>
        );
    }
}

class Footer extends React.Component{

    render(){
        return(
            <section className="footer">
                <h2><span>You have reached the End.</span><br/>

                    But don't worry there is more to come, however if you really want<br/>
                    to see more you can find all exercises no matter how small on my <a href="">Github</a>.
                </h2>
            </section>
        );
    }
}

//=======================================================
//GLOBALS
let app = document.getElementById("App");

const musicSearch={
    title: "MusicSearch",
    img: "/portfolioProto//rescources/musicSearchCover.png",
    description:"Second group project also working with the Software Tester class, " +
    "the idea was to use a lot of React and combine with API's and Firebase",
    important: "Some API's are using Http and needs to load unauthenticated scripts to work.",
    href: "https://luckyxii.github.io/Team4Colab/"
};
const firebaseChat={
    title: "Firebase Chat",
    img: "/portfolioProto//rescources/firebaseChatCover.png",
    description:"Solo project to practise using NoSQL databases like Firebase",
    href: "https://luckyxii.github.io/JS2Uppg2Chat/"
};

const bookAPI={
    title: "Book API",
    img: "/portfolioProto//rescources/bookAPICover.png",
    description:"solo project for using API's\n",
    important:"click the key to fetch a new API key before you start using it",
    href: "https://luckyxii.github.io/JS2Uppg1BokAPI/"
};

const westDate={
    title: "WestDate",
    img: "/portfolioProto//rescources/westDateProjectCover.png",
    description:"Our first group project.The idea was to practise API's, Scrum, time planing and teamwork.\n",
    important: "This site has no real database. To test it efficiently:\n1:in the console print: localAddTestUsersToDatabase()." +
    "\n2: register a new user or add generated ones by adding username admin and follow instructions.\n3:" +
    " log in as a user(like Trump: email:trump@mail.com password: a123)",
    href: "https://luckyxii.github.io/Projekt1JS2T5/"
};


//=======================================================
//MAIN

ReactDOM.render(<App/>, app);

//=======================================================
//CALLBACKS

//=======================================================
//FUNCTIONS