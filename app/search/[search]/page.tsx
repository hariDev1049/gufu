'use client';
import { Card, Gradient, Grid } from '@/app/styles/styles';
import Category from '../../Components/Category/Category';
import Search from '../../Components/Search/Search';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const page = () => {
  const searchText = useParams();
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=9&query=${searchText.search}`;
    const getCusine = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setSearch(data.results);
      } catch (error) {
        console.log('Error in fetching the api in Search');
      }
    };

    getCusine();
  }, [searchText.search]);

  return (
    <div className="px-20">
      <Search />
      <Category />
      <Grid>
        {search.map((res: any) => {
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
