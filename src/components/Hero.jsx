import PropTypes from "prop-types";

const Hero = ({ data }) => {
  const { title, description } = data[0].heroData[0];

  return (
    <section className="hero">
      <h1 className="title">{title}</h1>
      <p>{description}</p>
    </section>
  );
};

Hero.propTypes = { data: PropTypes.array.isRequired };

export default Hero;
