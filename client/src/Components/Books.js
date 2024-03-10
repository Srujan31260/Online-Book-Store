import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css';
import Navbar2 from './Navbar2';
import Cart from './Cart'; 

const Books = () => {
  const [, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getbooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]); 
  };


  const books = [
    {"source":"./b1.jpg","bookname":"Absalom, Absalom","author":"William Faulkner","price":899, "genre": "Fantasy", "quantity": 10},
    {"source":"./b2.jpg","bookname":"A Time to Kill","author":"John Grisham","price":499, "genre": "Drama", "quantity": 15},
    {"source":"./b3.jpeg","bookname":"The House of Mirth","author":"Edith Wharton","price":799, "genre": "Adventure", "quantity": 8},
    {"source":"./b4.jpg","bookname":"East of Eden","author":"John Steinbeck","price":699, "genre": "Biography", "quantity": 20},
    {"source":"./b5.jpg","bookname":"The Sun Also Rises","author":"Ernest Hemingway","price":559, "genre": "Poetry", "quantity": 12},
    {"source":"./b6.png","bookname":" Vile Bodies","author":"Evelyn Waugh","price":499, "genre": "Historical Fiction", "quantity": 18},
    // {"source":"./image7.png","bookname":"Agatha Chirstie","author":"Narayanan Vaghul","price":759, "genre": "Philosophy", "quantity": 25},
    // {"source":"./image8.jpg","bookname":"Memories Never Die","author":"Dr. Y.S. Rajan","price":829, "genre": "Autobiography", "quantity": 15},
  ];
  
  return (
    <div>
    <Navbar2/>
    <div className="books-container">
    <div className="books-container">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <div className='imgtag' style={{justifyContent:"center"}} ><img className="artimg" src={book.source} alt='img_here'/></div>
            <p>{book.bookname}</p>
            <p>Author: {book.author}</p>
            <p>Price: Rs.{book.price}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Genre: {book.genre}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
            ) )
          }
        </div>
    </div>
    </div>
  )
};

export default Books;