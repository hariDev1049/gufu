'use client';
import Veggies from '../Components/Veggies/Veggies';
import Popular from '../Components/Popular/Popular';

const page = () => {
  return (
    <div className="h-screen w-full">
      <Veggies />
      <Popular />
    </div>
  );
};

export default page;
