import "./hero.css";
import bg from "../../assets/projections.svg";
import { Link } from "react-router-dom";
import Users from "../users/Users";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1 className="h-title">Hiring -</h1>
          <div className="h-cards">
            <div className="card">
              <h2 className="c-title">I'm a Freelancer</h2>
              <p className="c-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus praesentium
              </p>
              <a href="" className="started">
                Get Started
              </a>
            </div>

            <div className="card">
              <h2 className="c-title">I want to hire</h2>
              <p className="c-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus praesentium
              </p>
              <Link to="/users/Id" className="started">
                Get Started
              </Link>
            </div>
          </div>
          <p className="des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            eos aspernatur blanditiis illo debitis amet aperiam vitae excepturi
            assumenda fugiat, praesentium adipisci ea veniam?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea
            hic sit culpa atque inventore adipisci modi odio fugit! Laudantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            qui impedit rerum asperiores aut veniam distinctio incidunt natus
            placeat!
          </p>
          <Users />
        </div>
        <img src={bg} alt="" className="l-bg" />
      </div>
    </>
  );
}

export default Hero;
