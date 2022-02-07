import React from 'react';
import '../index.css';



class Appareil extends React.Component {
    constructor(props) {        
      super(props);    
      this.state = {statut: props.statut};   
      this.name = props.name       
    }
  
    click(){    
      this.setState({statut : ! this.state.statut});}
  
    render() {
      let color = this.props.statut ? 'green' : 'red';
      let appareilStatut = this.props.statut ?  'allumé' :'éteint';
      let listgroupcolor = this.props.statut ?  'list-group-item  list-group-item-success' : 'list-group-item  list-group-item-danger';
      let btncolor = this.props.statut ? 'btn btn-inline btn-sm btn-danger' : 'btn btn-inline btn-sm btn-success' ;
      let btntext = this.props.statut ? 'éteindre' : 'allumer';  
      let name = this.name;    
      
      return (    
        <ul className="list-group">        
            <li className={listgroupcolor}>                    
              <h4 style={{'color' : color}}>  Appareil : {name} -- Statut : {appareilStatut}</h4>              
              <div><button className={btncolor}  onClick={() => this.props.onToggleStatut(this.props.appareil)}>{btntext}</button></div>
            </li>                
        </ul>
      );
    }
}

export default Appareil