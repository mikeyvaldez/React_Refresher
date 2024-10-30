/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Search for <span>Delicious</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit necessitatibus magni laudantium temporibus obcaecati
          odio sint sunt animi repellendus, aliquid, eligendi nobis amet aperiam
          deserunt nesciunt quia ad beatae accusamus?
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.bakerella.com/site/wp-content/uploads/2015/01/cinnamonrolls-720x540.jpg"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
