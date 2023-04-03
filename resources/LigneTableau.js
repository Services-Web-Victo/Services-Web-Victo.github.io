import React from "react";
import './LigneTableau.css';

class LigneTableau extends React.Component {

    // La fonction lance la fonction changerLivreSelect reçu en paramêtre avec en paramêtre la livre qui lui aussi 
    // était reçu en paramêtre. (Est-ce que j'abuse du mot paramêtre?)
    titreClic = () => {this.props.changerLivreSelect(this.props.livre)};

    render() {
        return (
            <tr>
                {/* On donne la valeur du id et du titre reçu en paramêtre */}
                <td>{this.props.livre.id}</td>
                {/* Sur un clique du titre, lance la fonction titreClic */}
                <td onClick={this.titreClic} className="ligne-titre">{this.props.livre.titre}</td>
            </tr>
        );
    }
}

export default (LigneTableau);