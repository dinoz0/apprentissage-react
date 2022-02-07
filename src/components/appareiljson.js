import React from 'react';


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        appareils: []
      };
    }
  
    componentDidMount() {
      fetch("./list.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              appareils: result.appareils
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error : error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, appareils } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <ul>
            {appareils.map(appareil => (
              <li key={appareil.id}>
                {appareil.name} {appareil.statut}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default MyComponent