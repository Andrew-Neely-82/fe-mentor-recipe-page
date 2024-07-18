import { preparationData } from "../data/data,js";

const Preparation = () => {
  const { title, list } = preparationData[0];

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
export default Preparation;
