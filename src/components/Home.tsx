import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">
        Home page
      </h1>
      <div className="home__images">
        <h2 className="home__images-example">Screenshots</h2>
        <img src="src/assets/scr1.png" alt="Screen map" />
        <img src="src/assets/scr2.png" alt="Screen db" />
      </div>
    </div>
  )
};