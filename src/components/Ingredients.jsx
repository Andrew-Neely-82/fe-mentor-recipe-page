import { ingredientsData } from "../data/data,js";

const Ingredients = () => {
  const { title, list } = ingredientsData[0];

  return (
    <section className="ingredients">
      <h2 className="section-title">{title}</h2>
      <ul>
        {list.map((el, key) => {
          return (
            <li key={key}>
              <span>{el.ingredient}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Ingredients;
