import React from 'react';
import FormGestionLivre from './FormGestionLivre';
import Tableau from './Tableau';
import './GestionLivre.css';


class GestionLivre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Un tableau d'objets qui va contenir tous les livres de la BD
            livres: [],
            // Un objet "livre" qui indique le livre présentement sélectionné. Si le id est nulle alors aucun livre n'est sélectionné.
            // Me sert à déterminer quelle action effectuer quand je clique sur enregistrer et quel livre supprimer quand on clique sur 
            // le bouton supprimer
            livreSelect: {id: null, titre: ""}
        };
    }

    componentDidMount() {
        // Sélectionner la liste de livres par un appel à l'api
        // Sur un succès, mettre à jour la liste de livres dans l'état
    }

    /**
     * Change le livre qui est sélectionné
     * @param {*} livre Objet qui contient la clé id et titre
     */
    changeLivreSelect = (livre) => {
        // Changer la valeur de livreSelect dans l'état pour la valeur reçu en paramêtre
    };

    videLivreSelect = () => {
        // Efface la valeur de livreSelect dans l'état (met la valeur de id à null et le titre à rien)
    };

    sauvegardeModification = () => {
        // S'il y a un livre de sélectionné, lance la fonction de modification, sinon lance la fonction d'ajout d'un nouveau livre
    }

    ajouterUnLivre = () => {
        // Ajout un nouveau livre dans la BD par un appel à l'api
        // Sur un succès, récupère le nouveau livre dans la réponse de la requête
        // Ajoute se livre dans la liste de livres de l'état
        // Efface la valeur de livreSelect dans l'état
    }

    modifierUnLivre = () => {
        // Modifie le livre sélectionné par un appel à l'api
        // Le id et le nouveau titre du livre à modifier son déjà dans l'objet livreSelect de l'état
        // Sur un succès, modifie l'item de listeLivre qui correspond au livre modifié par le nouveau titre
        // Efface la valeur de livreSelect dans l'état
    }

    supprimerUnLivre = () => {
        // Supprime le livre sélectionné par un appel à l'api
        // Sur un succès, enlève le livre de la liste de livres de l'état
        // Efface la valeur de livreSelect dans l'état
    }
    

    render() {

        return (
            <section>
                {/* Composant avec le input box et les boutons */}
                <FormGestionLivre              
                    // Valeur du livre sélectionné
                    livreSelect={this.state.livreSelect}
                    // La fonction pour modifier le livre sélectionné, je vais m'en servir à chaque modification du input box
                    changerLivreSelect={this.changeLivreSelect}
                    // La fonction pour effacer la valeur du livre sélectionné, je vais la relier au bouton nouveau
                    nouveau={this.videLivreSelect}
                    // La fonction reliée au bouton enregistrer
                    sauvegarder={this.sauvegardeModification}
                    // La fonction pour supprimer un livre
                    supprimer={this.supprimerUnLivre} />

                <h3>Liste des livres</h3>

                {/* Composant qui sert à afficher la liste de livres sous forme de tableau */}
                <Tableau 
                    // La liste de livres de l'état
                    livres={this.state.livres} 
                    // La fonction pour modifier le livre sélectionné, je vais m'en servir à chaque fois que je clique sur une ligne de livre
                    changerLivreSelect={this.changeLivreSelect} />    

            </section>
        );
    }
}

export default GestionLivre;