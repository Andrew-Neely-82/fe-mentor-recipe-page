import { nutritionData } from "../data/data,js";
import React from "react";

const Nutrition = () => {
  const { title, para, nutrition } = nutritionData[0];

  return (
    <section className="nutrition">
      <h2 className="section-title">{title}</h2>
      <p>{para}</p>
      <div className="nutrition-table">
        {nutrition.map((el, index) => (
          <React.Fragment key={index}>
            <div className="nutrition-table-set">
              <span>{el.type}</span>
              <span>{el.amount}</span>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Nutrition;
