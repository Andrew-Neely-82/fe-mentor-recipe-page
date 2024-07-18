import { heroData } from "../data/data,js";

const Hero = () => {
  const { title, description } = heroData[0];
  return (
    <section className="hero">
      <h1 className="title">{title}</h1>
      <p>{description}</p>
    </section>
  );
};
export default Hero;
