import PropTypes from "prop-types";

const Preparation = ({ data }) => {
  const { title, list } = data[0].preparationData[0];

  return (
    <section className="preparation">
      <h3 className="title">{title}</h3>
      <ul>
        {list.map((el, key) => {
          return (
            <li key={key}>
              <span className="bold">{el.title}</span>
              {el.time}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Preparation.propTypes = { data: PropTypes.array.isRequired };

export default Preparation;
