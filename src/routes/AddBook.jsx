import React from 'react'
import PropTypes from 'prop-types'
import bookFacade from '../BookFacade'

const AddBook = props => {
    return (
        <div>
            <ul>
                Title:
                <input id="inputTitle" />
            </ul>
            <ul>
                Info:
                <input id="inputInfo" />
            </ul>
            <ul>
                <button id='btnAddBook' onClick={addBook}>Add Book</button>
            </ul>
        </div>
    )
}

AddBook.propTypes = {}

function addBook() {
    const inputTitle = document.getElementById('inputTitle');
    const inputInfo = document.getElementById('inputInfo');
    const title = inputTitle.value;
    const info = inputInfo.value;

    const book = {
        "title": title,
        "info": info
    };
    bookFacade.addBook(book);

    // reset form
    inputTitle.value = "";
    inputInfo.value = "";
}

export default AddBook