import PropTypes from "prop-types";

const Ingredients = ({ data }) => {
  const { title, list } = data[0].ingredientsData[0];

  return (
    <section className="ingredients">
      <h2 className="section-title">{title}</h2>
      <ul>
        {list.map((el, key) => {
          return <li key={key}>{el.ingredient}</li>;
        })}
      </ul>
    </section>
  );
};

Ingredients.propTypes = { data: PropTypes.array.isRequired };

export default Ingredients;
