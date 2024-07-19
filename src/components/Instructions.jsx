import PropTypes from "prop-types";

const Instructions = ({ data }) => {
  const { title, steps } = data[0].instructionsData[0];

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

Instructions.propTypes = { data: PropTypes.array.isRequired };

export default Instructions;
