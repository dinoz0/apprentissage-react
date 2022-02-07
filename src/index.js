import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Appareils from './components/appareils'




class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      appareils: []
    };
  }
  // state = {
  //   appareils: [
  //     { id: 1,name: 'Machine à laverE', statut: true},
  //     { id: 2,name: 'FrigoE', statut: false },
  //     { id: 3,name: 'OrdinateurE', statut: true },      
  //   ],
  // };

  componentDidMount() {
    fetch("./list.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            appareils: result.appareils
          });
        },        
        (error) => {
          this.setState({
            isLoaded: true,
            error : error
          });
        }
      )
  }
  
  handleonToggleStatut = (appareil) => {
    const appareils = [...this.state.appareils];
    const index = appareils.indexOf(appareil);
    appareils[index] = { ...appareils[index] };
    appareils[index].statut = ! appareils[index].statut 
    this.setState({ appareils });    
  };


  handleAllOn = () => {
    const appareils = this.state.appareils.map((a) => {
      a.statut = true;      
      return a;      
    });
    this.setState({ appareils });   
  };

  handleAllOff = () => {
    const appareils = this.state.appareils.map((a) => {
      a.statut = false;
      return a;
    });
    this.setState({ appareils });
  };

    render() {  
    return (      
      <div className="container">
        <div className="row">
          <div className="col-xs-12"></div>    
            <h2>Mes appareils</h2>                  
            <Appareils appareils={this.state.appareils}
            OnAllOn={this.handleAllOn}
            OnAllOff={this.handleAllOff}
            onToggleStatut={this.handleonToggleStatut}
            />
        </div>
      </div>
    );
  }
}
  

  
// ========================================
  
ReactDOM.render(
  <Board />,
  document.getElementById('root')
);