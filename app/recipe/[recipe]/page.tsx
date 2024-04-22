'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
  const path = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${path.recipe}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`;
    const getCusine = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        setRecipe(data);
      } catch (error) {
        console.log('Error in fetching the api in Search');
      }
    };

    getCusine();
  }, [path.recipe]);

  return <div></div>;
};

export default page;
