import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/FetchApi";
import MealItem from "./meal-Item/MealItem";

const DUMMY_MEALS = [
  {
    id: "1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const geetMeals = async () => {
    try {
      setLoading(true);

      const response = await fetchApi("foods");

      setMeals(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed yo load meals");
    }
  };

  useEffect(() => {
    geetMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>Loading........</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {meals.map((meal) => {
        return (
          <MealItem
            title={meal.title}
            description={meal.description}
            price={meal.price}
            id={meal._id}
          />
        );
      })}
    </Card>
  );
}

export default Meals;

const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  max-width: 64.9375rem;
  margin: 40px auto;
  padding: 40px 40px 20px 40px;

  animation: 600ms ease-out 0s 1 normal forwards running slide-up;

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      transition-duration: 4s;
    }
  }
`;
