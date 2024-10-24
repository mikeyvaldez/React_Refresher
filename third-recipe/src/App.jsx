import './App.css'

function App() {
  return (
    <div className="App">
      <main className="_container">
        <header className="main_header">
          <div className="text-container">
            <h1 className="header-title">
              Search for <span>Delicious</span> Food
            </h1>
            <p className="header-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit necessitatibus magni
              laudantium temporibus obcaecati odio sint sunt animi repellendus, aliquid, eligendi nobis amet
              aperiam deserunt nesciunt quia ad beatae accusamus?
            </p>
            <div className="header-input-container">
              <input type="text" placeholder="Find a recipe" />
              <button>Search</button>
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

        <section className="cards">
          <div className="card">
            <img
              src="https://static01.nyt.com/images/2021/07/06/dining/yk-muhammara-chicken-sandwiches/merlin_189026502_58171dd4-b0bc-47c3-aa6a-d910a3f1de4c-superJumbo.jpg"
              alt=""              
            />
            <div className="card-content">
              <h3>Chicken Sandwich</h3>
              <div className="card-info">
                <div className="tag">
                  <p>Easy lunch</p>
                </div>
                <p className="time-text">60 mins</p>
            </div>
            </div>            
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
