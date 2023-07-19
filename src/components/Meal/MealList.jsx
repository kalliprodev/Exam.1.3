import React from 'react';
import "./Meal.scss";
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">meals</div>
        <section className="sc-meal grid">
          {meals?.map((mealItem) => {
            const {
              idMeal: id,
              strArea: area,
              strCategory: category,
              strMeal: meal,
              strMealThumb: thumbnail,
            } = mealItem;

            return (
              <Link
                to={`/meal/${id}`}
                className="meal-itm align-center justify-center"
                key={id}>
                <div className="meal-itm-img">
                  <img src={thumbnail} alt={meal} />
                  <div className="meal-itm-cat bg-orange text-orange fw-6">
                    {category}
                  </div>
                </div>

                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex flex-column">
                    <div className="area fs-14 ls-1 fw-5">{area}</div>
                    <div className="meal fw-15 fw-7 op-09">{meal}</div>
                  </div>

                  
                  <Button className='btn'>Favorite</Button>
                  {/* <button className="btn btn-outline-dark btn-primary coursor-pointer bg-gray boreder-radius-3px ">
                    Favorite
                  </button> */}
                </div>
              </Link>
            );
          })
          }
          
        </section>
      </div>
    </div>
  );
}

export default MealList