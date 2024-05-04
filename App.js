import React from 'react';
import './App.css'; // Import CSS file for styling
import './styles.css'; // Import CSS file for styling


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <div className="section-container">
          <section>
            <h2>Section 1 Title</h2>
            <p>Section 1 Body</p>
          </section>
          <section>
            <h2>Section 2 Title</h2>
            <p>Section 2 Body</p>
          </section>
        </div>
        <div className="section-container">
          <section>
            <h2>Section 3 Title</h2>
            <p>Section 3 Body</p>
          </section>
          <section>
            <h2>Section 4 Title</h2>
            <p>Section 4 Body</p>
          </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;