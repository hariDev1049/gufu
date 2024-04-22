'use client';
import Category from '@/app/Components/Category/Category';
import { Card, Gradient, Grid } from '@/app/styles/styles';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Search from '@/app/Components/Search/Search';
import Link from 'next/link';

const page = () => {
  const params = useParams();

  const [cusine, setCusine] = useState([]);

  useEffect(() => {
    const cusineParam = params.type.toString();

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=12&cuisine=${cusineParam}`;
    const getCusine = async () => {
      const check = localStorage.getItem(cusineParam);
      if (check) {
        setCusine(JSON.parse(check));
      } else {
        try {
          const res = await fetch(url);
          const data = await res.json();
          localStorage.setItem(cusineParam, JSON.stringify(data.results));
          setCusine(data.results);
        } catch (error) {
          console.log('Error in fetching the api in Cusine');
        }
      }
    };
    getCusine();
  }, [params.type]);

  return (
    <div className="px-20">
      <Search />
      <Category />
      <Grid>
        {cusine.map((res: any) => {
          return (
            <Card key={res.id}>
              <Link href={`/recipe/${res.id}`}>
                <p>{res.title}</p>
                <img src={res.image} alt={res.title} />
                <Gradient />
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default page;
