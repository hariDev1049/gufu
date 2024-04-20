import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Wrapper, Card, Gradient } from '@/app/styles/styles';
import '@splidejs/react-splide/css';

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=12`;
  useEffect(() => {
    const getReciepes = async () => {
      const check = localStorage.getItem('popular');
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        try {
          const res = await fetch(url);
          const data = await res.json();
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setPopular(data.recipes);
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
        <h3 className="text-center text-2xl font-bold pb-6">Popular Picks</h3>

        <Splide
          options={{
            perPage: 3,
            gap: '3rem',
            drag: 'free',
          }}
        >
          {popular.map((res: any) => {
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

export default Popular;
