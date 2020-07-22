import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

function AddBook(props) {

    return (
        <form id="add-book">
            
            <div className="field">
                <label>Book Name:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Genre</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default graphql(getAuthorsQuery)(AddBook);


