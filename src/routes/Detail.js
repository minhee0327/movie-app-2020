import React from "react";
import "../css/Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img src={location.state.poster} alt={location.state.title} />
          <h3>{location.state.title}</h3>
          <h5>{location.state.year}</h5>
          <ul className="detail__genres">
            {location.state.genres.map((genre, idx) => {
              return (
                <li key={idx} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p>{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
