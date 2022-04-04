import React from 'react'
import PropTypes from 'prop-types'
import bookfacade from "../BookFacade"
import "./BookStyle.css"

const Books = props => {

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Info</th>
                <th></th>
            </tr>

            {bookfacade.getBooks().map(book =>
                <tr>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.info}</td>
                    <button id={"btnBook"+book.id} >View</button>
                </tr>
            )}
        </table>
    )
}

Books.propTypes = {}

export default Books