import PropTypes from "prop-types";
import React from "react";

const Nutrition = ({ data }) => {
  const { title, para, nutrition } = data[0].nutritionData[0];

  return (
    <section className="nutrition">
      <h2 className="section-title">{title}</h2>
      <p>{para}</p>
      <div className="nutrition-table">
        {nutrition.map((el, index) => (
          <React.Fragment key={index}>
            <div className="nutrition-table-set">
              <span>{el.type}</span>
              <span className="bold dark-brown">{el.amount}</span>
            </div>
            {index < nutrition.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

Nutrition.propTypes = { data: PropTypes.array.isRequired };

export default Nutrition;
