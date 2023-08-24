import './App.css';
import folders from "./imgs/folders.svg"
import game from "./imgs/game.svg"
import interview from "./imgs/interview.svg"
import lets_talk from "./imgs/lets_talk.svg"
import like from "./imgs/like.svg"
import pie_chart from "./imgs/pie_chart.svg"
import priority from "./imgs/priority.svg"
import review from "./imgs/review.svg"
import solar_energy from "./imgs/solar_energy.svg"
import train from "./imgs/train.svg"
import analyse from "./imgs/analyse.svg"
import launch from "./imgs/launch.svg"
import graphics from "./imgs/graphics.svg"
import check from "./imgs/check.svg"

function App() {

const menu = [{name:'Train your AI assistant', category:'train', info:'algo', img:game},
              {name:'Customer Service Chatbox', category:'launch', info:'algo',img:lets_talk},
              {name:'Sales Lead Qualification Bot', category:'launch', info:'algo', img:priority},
              {name:'Social Media Content Analysis Bot', category:'launch',info:'algo', img:like},
              {name:'HR Candidate Screening Bot', category:'launch', info:'algo',img:interview},
              {name:'Product Recommendation Bot', category:'launch', info:'algo', img:review},
              {name:'Legal Document Analysis Bot', category:'launch', info:'algo', img:folders},
              {name:'Unlimited Capabilities', category:'launch', info:'algo', img:solar_energy},
              {name:'Analyse you AI assistant', category:'analyse', info:'algo',  img:pie_chart}];

const services = [ "Unlimited Customization", "24/7 Availability", "Integrate Across Platforms",
 "Adapt to Envolving Needs" ]

const getStarted = () => {
  alert("Hay que reemplazar la url, ahora te redirige al inicio")
} 

const handleMenuClick = (info) => {
  alert("despacha la accion al redux para cambiar el contenido del estado global")
 // dispatch(setSelectedInfo(info));
};


// -------- LLAMO AL ESTADO GLOBAL

// const section2 = useSelector(state => state.section2);


// -------- Funcion del reducer para cambiar el estado global 
/*
const initialState = {
  section2: algo,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INFO:
      return {
        ...state,
        section2: action.payload,
      };
    default:
      return state;
  }
}; */

  return (
    <div className="app">
      <h1>
        Here is how Jigma helps <br/> to grow businesses
      </h1>
      <div className="container">

          <div className="sidebar_menu">
              <div className="train">
                <ul>
                <img src={train} alt="train-img" />
                {menu.map(e => (
                    e.category === "train" && (
                    <li className="category_card" key={e.name}> <img src={e.img} alt="cat1" /> 
                      <button onClick={() => handleMenuClick(e.info)}> {e.name} </button> </li>
                    )))}
                </ul>
              </div>
              <div className="launch">
                <ul>
                <img src={launch} alt="launch-img" />
                  {menu.map(e => (
                    e.category === "launch" && (
                    <li className="category_card" key={e.name}> <img src={e.img} alt="cat2" /> 
                      <button onClick={() => handleMenuClick(e.info)}> {e.name} </button>  </li> 
                    )))}
                </ul>
              </div>
              <div className="analyse">
                <ul>
                <img src={analyse} alt="analyse-img" />
                  {menu.map(e => (
                    e.category === "analyse" && (
                    <li className="category_card" key={e.name}> <img src={e.img} alt="cat3" /> 
                      <button onClick={ () => handleMenuClick(e.info)}> {e.name} </button>  </li> 
                    )))}
                </ul>
              </div>
              </div>
          <div className="content">
              <div className="img_cont"> <img src={graphics} alt="graphics" /> </div> {/* Esta imagen debe ser reemplazada por el contenido del estado global, el que va a cambiar*/}
              <div>
                <h2>Empower Your Business with Jigma's Adaptive AI Workforce</h2>
                <p>From Customer Engagement to Complex Analysis - Train Your AI for Anything. Unleash the Potential of Intelligent Automation Across All Facets of Your Business.</p>
                
                <div className="services">
                  <ul>
                  {services.map(e => (
                    <li key={e}> <img src={check} alt="cat1" /> {e} </li> ))
                    }
                  </ul>
                </div>
                <button onClick={getStarted}> <a href="/">Get started - free</a></button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
