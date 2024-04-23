import { Card, Gradient, Wrapper } from '@/app/styles/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, left: 10 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, left: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
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
                  <Link href={`/recipe/${res.id}`}>
                    <p>{res.title}</p>
                    <img src={res.image} alt={res.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </motion.div>
  );
};

export default Veggies;
