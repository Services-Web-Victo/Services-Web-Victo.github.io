import React from 'react';
import './FormGestionLivre.css'

class FormGestionLivre extends React.Component {
    constructor(props) {
        super(props);

    }

    handleSubmit = (e) => {
        // Annule l'action par défaut du formulaire
        // Lance la fonction sauvegarder reçu en paramêtre
    }

    modifierLivre = (e) => {
        // Lance la fonction changerLivreSelect reçu en paramêtre
        // La valeur du id restera la valeur de livreSelect.id reçu en paramêtre
        // Le titre sera la valeur du input box
    };

    nouveauLivre = () => {
        // Efface la valeur du input box
        // Lance la fonction nouveau reçu en paramêtre
    }

    supprimerLivre = (e) => {
        // Efface la valeur du input box
        // Lance la fonction supprimer reçu en paramêtre
    }

    render() {
        return (
            // Lance la fonction handleSubmit quand le formulaire est soumis (quand le bouton enregistrer est cliquer)
            <form onSubmit={this.handleSubmit}>
                
                <table className='BooksTable'>
                        <tbody>
                            <tr>
                                <td><label>Titre :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="titre"
                                        name="titre"
                                        // La valeur du input est le titre de livreSelect reçu en paramêtre
                                        value={this.props.livreSelect.titre}
                                        // À chaque changement, on lance la fonction modifierLivre
                                        onChange={this.modifierLivre}
                                    />
                                </td>
                            </tr>                         

                            <tr>
                                <td></td>
                                <td id="ligneBoutons">
                                    {/* Sur clique de bouton, lance la fonction appropriée */}
                                    <input type="button" value="Nouveau" onClick={this.nouveauLivre}/>
                                    <input type="button" value="Supprimer" onClick={this.supprimerLivre}/>
                                    <input type="submit" value="Enregistrer" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
            </form>
        );
    }
}

export default FormGestionLivre;