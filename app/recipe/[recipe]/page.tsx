'use client';
import { Button, DetailedWrapper, Info } from '@/app/styles/styles';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
  const path = useParams();

  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instruction');

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${path.recipe}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`;
    const getCusine = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.log('Error in fetching the api in Search');
      }
    };

    getCusine();
  }, [path.recipe]);

  return (
    <DetailedWrapper className="flex flex-grow mx-24 mt-10">
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info className="w-3/4">
        <Button
          onClick={() => setActiveTab('instruction')}
          className={activeTab == 'instruction' ? 'active' : ''}
        >
          Instructions
        </Button>
        <Button
          onClick={() => setActiveTab('ingredients')}
          className={activeTab == 'ingredients' ? 'active' : ''}
        >
          Ingredients
        </Button>
        {activeTab === 'instruction' ? (
          <div className="mt-5">
            <p
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
              className="text-balance"
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              className="text-balance"
            ></p>
          </div>
        ) : (
          <ul>
            {recipe.extendedIngredients &&
              recipe.extendedIngredients.map((ins) => (
                <li key={ins.id}>{ins.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailedWrapper>
  );
};

export default page;
