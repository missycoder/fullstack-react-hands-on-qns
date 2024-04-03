import React, { useState } from 'react';

export default function Library() {
    // state variables
    const [books, setBooks] = useState([
        {
            'id': 101,
            'title': 'Dune',
            'author': 'Frank Herbert',
            'genre': 'science-fiction',
            'tags': ['futuristic', 'classics']
        },
        {
            'id': 102,
            'title': 'The Lord of the Rings: The Fellowship of the Ring',
            'author': 'J.R.R Tolkien',
            'genre': 'fantasy',
            'tags': ['door-stopper', 'trilogy']
        }
    ]);

    // State variable 'newBook' and its setter function 'setNewBook'
    const [newBook, setNewBook] = useState({
        // Initialize 'newBook' with an empty book object
        title: '',
        author: '',
        genre: '',
        tags: []
    });

    // `useState` hook to create a state variable named `editingBook`
    // & its associated setter function `setEditingBook`
    // When a book is being edited, details stored in `editingBook`
    const [editingBook, setEditingBook] = useState(null);

    // Function to add a new book
    const addBook = () => {
        // Create a new array containing all existing books and the new book
        const updatedBooks = [...books, { ...newBook, id: Date.now() }];
        // Update the state variable 'books' with the new array containing the updated list of books
        setBooks(updatedBooks);
        // Reset the 'newBook' state to its initial empty state to clear the input fields
        setNewBook({ title: '', author: '', genre: '', tags: [] });
    };

    // Function to update an existing book
    const updateBook = () => {
        // Map through the array of books
        const updatedBooks = books.map(book =>
            // Check if the current book's id matches the id of the book being edited
            book.id === editingBook.id
                // If it matches, create a new object with the updated book details from 'editingBook'
                ? { ...editingBook }
                // If it doesn't match, keep the current book object unchanged
                : book
        );
        // Update the state variable 'books' with the updated array of books
        setBooks(updatedBooks);
        // Reset the 'editingBook' state to null to indicate no book is being edited
        setEditingBook(null);
    };

    // Function to display the form for editing a book
    const displayEditBook = (book) => {
        // Set the 'editingBook' state to the book that is being edited
        setEditingBook(book);
        // Set the 'newBook' state to the details of the book being edited
        setNewBook(book);
    };

    // Function to cancel editing a book
    const cancelEditBook = () => {
        // state `null` indicates no book is being edited
        setEditingBook(null);
        // Reset newBook state to its initial empty state -> clears changes made during the editing process,
        // revert form to default
        setNewBook({ title: '', author: '', genre: '', tags: [] });
    };

    // Function to display all books
    const displayBooks = () => {
        // Map through the array of books and generate JSX for each book
        return books.map(book => (
            <div key={book.id}>
                {/* Display the title of the book */}
                <h4>Title: {book.title}</h4>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                {/* Display the tags associated with the book, joined by commas */}
                <p>Tags: {book.tags.join(',')}</p>
                {/* Check if a book is currently being edited & ID matches the ID of the current book */}
                {editingBook && editingBook.id === book.id ? (
                    <>
                        <button onClick={updateBook}>Update Book</button>
                        <button onClick={cancelEditBook}>Cancel</button>
                    </>
                ) : (
                    // If the book is not being edited, display a button to initiate editing
                    <button onClick={() => displayEditBook(book)}>Edit</button>
                )}
                <hr />
            </div>
        ));
    };

    // Function to `handleInputChange` for the new book form
    // `handleInputChange` triggered when there is a change in the input fields of the new book form.
    // Takes `event(e)` as a parameter, aka change event.
    // Inside the function, it extracts the name & value of the input field that triggered the change event from `e.target`.
    // It then updates the `newBook` state using `setNewBook` by spreading the existing newBook state 
    // & update the new value.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // `[name]` dynamic property in JS object literals
        setNewBook({ ...newBook, [name]: value });
    };

    // Function to `hangleTagChange` for the new book form
    // `hangleTagChange` triggered when there is a change in the checkboxes representing tags in the new book form.
    // Takes tag as a parameter, which represents the tag that has been toggled.
    const handleTagChange = (tag) => {
        // Inside the function, it checks if the tag already exists in the tags array of the newBook state.
        const updatedTags = newBook.tags.includes(tag)
            // If the tag is already in the array, remove it
            ? newBook.tags.filter(existingTag => existingTag !== tag)
            // If the tag is not in the array, add it using spread syntax
            : [...newBook.tags, tag];
        // Update the newBook state with the updated tags using setNewBook
        setNewBook({ ...newBook, tags: updatedTags });
    };


    // JSX rendering
    // Display a heading based on whether to `Edit Book` or `Add New Book`
    return (
        <div className="container">
            <div className="col">
                {displayBooks()}
            </div>

            <div className="col">
                <h3>{editingBook ? 'Edit Book' : 'Add New Book'}</h3>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        // displays the current value of the `title` property in the `newBook` state.
                        value={newBook.title}
                        // `onChange` event handler is set to `handleInputChange`-> invoked whenever the value of the input field changes. 
                        // This function updates the `newBook` state with the new title entered by the user.
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        value={newBook.genre}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Tags:</label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="classics"
                        checked={newBook.tags.includes('classics')}
                        // Call `handleTagChange` function when the checkbox is toggled
                        onChange={() => handleTagChange('classics')}
                    /><label>Classic</label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="doorstopper"
                        checked={newBook.tags.includes('doorstopper')}
                        onChange={() => handleTagChange('doorstopper')}
                    /><label>Doorstopper</label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="futuristic"
                        checked={newBook.tags.includes('futuristic')}
                        onChange={() => handleTagChange('futuristic')}
                    /><label>Futuristic</label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="trilogy"
                        checked={newBook.tags.includes('trilogy')}
                        onChange={() => handleTagChange('trilogy')}
                    /><label>Trilogy</label>
                </div>
                <button onClick={editingBook ? updateBook : addBook}>
                    {/* Conditionally render the button label based on whether a book is being edited */}
                    {editingBook ? 'Update Book' : 'Add Book'}
                </button>
                {/* Render a cancel button only if a book is being edited */}
                {editingBook && <button onClick={cancelEditBook}>Cancel</button>}
            </div>
        </div>
    );
}
