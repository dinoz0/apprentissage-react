import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Appareil from './components/appareil'


function Bouton (props){    
  let color =  props.value ? 'btn btn-danger' : 'btn btn-success'
  let text =  props.value ? 'btn btn-danger' : 'btn btn-success'
  return (
    <div>          
      <button className={color}  onClick={props.onClick}>{text}</button>      
    </div>
  );    
}
// function Bouton2 (props){    
//   let color =  props.value ? 'btn btn-success' : 'btn btn-danger'
//   let text =  props.value ? 'alumer' : 'éteindre'
//   return (
//     <div>          
//       <button className={color}  onClick={props.onClick}>{text}</button>      
//     </div>
//   );    
// }
function BoutonON (props){
  return (
    <div>          
      <button className="btn btn-success" onClick={props.onClick} >Tout allumer</button>     
    </div>
  );    
}
function BoutonOff (props){  
  return (
    <div>          
      <button className="btn btn-danger" onClick={props.onClick} >Tout éteindre</button>      
    </div>
  );    
}



// class Appareil extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       value: null,
//       colore : props.value ? 'red' : 'green',
//       listgroupcolor : props.value ? 'list-group list-group-item-danger' : 'list-group list-group-item-success',
//     };
//   }

//   click(){
//     const appareil = this.state.appareil.slice();//.slice() crée une copie de l'élément a fin de le modifier
//     this.setState({// recrée la variable state
//       appareil: appareil,
//       xIsNext: true,
//       AppareilStatut: !this.state.AppareilStatut,      
//     });
//   }

//   render(props) {
//     return (    
//       <ul className="list-group">
//         {ListAppareil.map((appareil) => (//equivalent de for each 
//           <li className={this.state.listgroupcolor} 
//             key={ appareil.id }>                    
//             <p style={{'color' : this.state.colore}}>  Appareil: {appareil.name} -- Statut : {appareil.statut}</p>         
//             <Bouton2 onClick={() => this.click()}/>             
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }


class Board extends React.Component {
  constructor(props) {
    super(props);
      this.state = {      
        statut : true,
      };
  }

  
  handleClick2(){
    //const squares = this.state.squares.slice();//.slice() crée une copie de l'élément a fin de le modifier
    this.setState({// recrée la variable state      
      statut: !this.state.statut,      
    });
    console.log(this.state.statut);
  }

  setOnAll(){
    Appareil.click(this);
    //Appareil.state = {statut :true};
  }
  
  // setOffAll(){
  //   Appareil.state = false;
  //   Appareil.state = false;
  //   Appareil.state = false;
  //   console.log(Appareil.state)
  // }

  renderAppareil(i) {
    return (
      <Appareil 
        value={this.state.squares[i]}  
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {  
    return (
      <div>          
        <Appareil appareilname='Machine à laver' />
        <Appareil appareilname='Frigo'/>
        <Appareil appareilname='Ordinateur'/>
        <Bouton 
          value={this.state.statut}           
          onClick={() => this.handleClick2(this)}
        />
        <BoutonON onClick={() => this.setOnAll(this)}/>
        <BoutonOff onClick={() => this.setOffAll(this)}/>
      </div>
    );
  }
}
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
  
// ========================================
  
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);