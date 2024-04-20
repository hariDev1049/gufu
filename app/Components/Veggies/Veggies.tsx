import { Card, Gradient, Wrapper } from '@/app/styles/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

const Veggies = () => {
  const [veggies, setVeggies] = useState([]);
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=12&tags=vegetarian`;
  useEffect(() => {
    const getReciepes = async () => {
      const check = localStorage.getItem('veggies');
      if (check) {
        setVeggies(JSON.parse(check));
      } else {
        try {
          const res = await fetch(url);
          const data = await res.json();
          localStorage.setItem('veggies', JSON.stringify(data.recipes));
          setVeggies(data.recipes);
        } catch (error) {
          console.log('Error in fetching the api in Popular');
        }
      }
    };
    getReciepes();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3 className="text-center text-2xl font-bold pb-6">
          Top Vegeterian Picks
        </h3>

        <Splide
          options={{
            perPage: 4,
            gap: '3rem',
            drag: 'free',
          }}
        >
          {veggies.map((res: any) => {
            return (
              <SplideSlide key={res.id}>
                <Card>
                  <p>{res.title}</p>
                  <img src={res.image} alt={res.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Veggies;
