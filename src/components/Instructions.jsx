import { instructionsData } from "../data/data,js";

const Instructions = () => {
  const { title, steps } = instructionsData[0];
  return (
    <section className="instructions">
      <h2 className="section-title">{title}</h2>
      <ol>
        {steps.map((el, key) => {
          return (
            <li key={key}>
              <span className="bold">{el.step}: </span>
              {el.instruction}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
export default Instructions;
