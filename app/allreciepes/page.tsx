'use client';
import Veggies from '../Components/Veggies/Veggies';
import Popular from '../Components/Popular/Popular';
import Category from '../Components/Category/Category';
import Search from '../Components/Search/Search';

const page = () => {
  return (
    <div className=" w-full px-20 flex flex-grow flex-col">
      <Search />
      <Category />
      <Veggies />
      <Popular />
    </div>
  );
};

export default page;
