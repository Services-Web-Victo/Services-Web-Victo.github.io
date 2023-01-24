import React from 'react';

class FormAjouterLivre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: '',
            genreId: '',
            isbn: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const book = {
            titre: this.state.titre,
            genreId: this.state.genreId,
            isbn: this.state.isbn,
        };
        this.props.addBook(book);
        
        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            titre: '',
            genreId: '',
            isbn: '',
        });
    }


    render(){

        return (
            <div className='formAjouterLivre'>
            
                <h2>Ajouter un livre</h2>

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
                                        value={this.state.titre}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label>genreId :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="genreId"
                                        name="genreId"
                                        value={this.state.genreId}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label>isbn :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="isbn"
                                        name="isbn"
                                        value={this.state.isbn}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td style={{'textAlign':'right'}}>
                                    <input type="button" value="Cancel" onClick={this.clearInput}/>
                                    <input type="submit" value="Ajouter" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </form>
            </div>
        );
    }
}

export default (FormAjouterLivre);