import React from 'react';
import LigneTableau from './LigneLivre';
import FormAjouterLivre from './FormAjouterLivre';
import api from '../utils/Api';

class ListeLivres extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

    this.addBook = this.addBook.bind(this);
  }

  componentDidMount() {
    api({
      method: 'get',
      url: '/books',
    })
    .then((res) => {
      const books = res.data;
      this.setState({ books }); 
    });
  }

  addBook(book) {
    api({
      method: 'POST',
      url: '/books',
      data: {
        genreId: book.genreId,
        titre: book.titre,
        isbn: book.isbn
      }
    })
    .then((resultat) => {
      book.id = resultat.data.id;
      const books = [...this.state.books, book];
      this.setState({books: books});
    });
  }

  render(){
    const lignesTableau = this.state.books.map(livre => (
        <LigneTableau book={livre} key={livre.id}/>
        )
    );

    return (
      <div className="Tableau">

        <FormAjouterLivre addBook={this.addBook}/>

        <h2>{this.props.titreTableau}</h2>
        <table className="BooksTable">
          <thead>
            <tr>
              <th>id</th>
              <th>Titre</th>
              <th>genreId</th>
              <th>isbn</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lignesTableau}
          </tbody>
        </table>
    </div>
    );
  }
}

export default (ListeLivres);
