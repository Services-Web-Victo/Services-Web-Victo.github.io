import React from "react";
import LigneTableau from "./LigneTableau";

class Tableau extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        // On construit un tableau de composante LigneTableau avec en paramêtre un livre, une clé et la fonction changerLivreSelect
        const lignesTableau = this.props.livres.map(livre => 
            (<LigneTableau livre={livre} key={livre.id} changerLivreSelect={this.props.changerLivreSelect}/>)
        );

        return (
            <table className="BooksTable">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Titre</th>
                </tr>
                </thead>
                <tbody>
                    {lignesTableau}
                </tbody>
            </table>
        );
    }
}

export default (Tableau);