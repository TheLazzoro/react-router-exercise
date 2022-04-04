import React from 'react'
import PropTypes from 'prop-types'
import bookFacade from '../BookFacade'

const FindBook = props => {
    return (
        <div>
            <ul>
                Search book id:
                <input id="inputId" />
                <button onClick={getBookById}>Search</button>
            </ul>
            <ul>
                <ul id='bookTitle'></ul>
                <ul id='bookInfo'></ul>
            </ul>
        </div>
    )
}

FindBook.propTypes = {}

function getBookById() {
    const id = document.getElementById('inputId').value;
    const book = bookFacade.findBook(id);
    
    const lblTitle = document.getElementById("bookTitle");
    const lblInfo = document.getElementById("bookInfo");
    if(book == null) {
        lblTitle.innerHTML = `Error: Book with id ${id} was not found.`;
        lblInfo.innerHTML = "";
        return;
    }

    lblTitle.innerHTML = `Title: ${book.title}`;
    lblInfo.innerHTML = `Info: ${book.info}`;
}

export default FindBook