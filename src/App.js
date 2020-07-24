import React from "react";
import PropTypes from "prop-types";

function Food({ fav, picture, rating }) {
  return (
    <div>
      <h2>I love {fav}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={fav} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Choco",
    rating: 4.5,
    image: "https://ifh.cc/g/IvrS1y.jpg",
  },
  {
    id: 2,
    name: "Coffee",
    rating: 3,
    image: "https://ifh.cc/g/smboPX.jpg",
  },
  {
    id: 3,
    name: "Pasta",
    rating: 4,
    image: "https://ifh.cc/g/fzlVRf.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    rating: 4.8,
    image: "https://ifh.cc/g/roVY2P.jpg",
  },
];

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// function renderFood(dish) {
//   return <Food fav={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          fav={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
