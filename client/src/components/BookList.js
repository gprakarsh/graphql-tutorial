import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

function BookList(props) {

    const displayBooks = () => {
        const { loading, books } = props.data;
        if (loading) {
            return (<div>Loading Books...</div>);
        } else {
            return books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            });
        }
    };

    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </div>
    );
}

export default graphql(getBooksQuery)(BookList);
