import React from 'react';
import Appareil from './appareil'



class Appareils extends React.Component {
    constructor(props) {
        super(props);
            this.state = {      
            statut : true,
        };
    }   
   
  
    render() {  
        const {appareils , OnAllOn, OnAllOff, onToggleStatut} = this.props;
        return (                
            <div>                    
                {appareils.map((appareil) => (
                    <Appareil
                    key={appareil.id}
                    name={appareil.name}
                    statut={appareil.statut}  
                    appareil={appareil} 
                    onToggleStatut={onToggleStatut}         
                    />                        
                ))} 
                <div>          
                    <button className="btn btn-success" onClick={OnAllOn} >Tout allumer</button>                        
                    <button className="btn btn-danger" onClick={OnAllOff} >Tout éteindre</button>      
                </div>          
            </div>
        );
    }
}

 


export default Appareils