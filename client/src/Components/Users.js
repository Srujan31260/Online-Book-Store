import React from 'react';
import Navbar3 from './Navbar3';
import './User.css'; // Import CSS file

function RecommendedBooks() {
  const topBooks = [
    "React Design Patterns and Best Practices by Michele Bertoli",
    "Learning React: A Hands-On Guide to Building Web Applications Using React and Redux by Kirupa Chinnathambi",
    "React Native Cookbook by Dan Ward",
    "React.js Essentials by Artemij Fedosejev",
    "CSS in Depth by Keith J. Grant",
    "React: Up & Running: Building Web Applications by Stoyan Stefanov",
    "Fullstack React: The Complete Guide to ReactJS and Friends by Anthony Accomazzo, Ari Lerner, and Nate Murray",
    "React Cookbook: Create dynamic web apps with React using Redux, Webpack, Node.js, and GraphQL by Carlos Santana Roldán and Brayan Oviedo",
    "CSS Secrets: Better Solutions to Everyday Web Design Problems by Lea Verou",
    "Pro React 16 by Adam Freeman"
  ];

  return (
    <div>
      <h2>Top 10 Recommended Books</h2>
      <ul className="book-list"> {/* Apply CSS class */}
        {topBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendedBooks;
