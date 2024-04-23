'use client';
import Veggies from '../Components/Veggies/Veggies';
import Popular from '../Components/Popular/Popular';
import Category from '../Components/Category/Category';
import Search from '../Components/Search/Search';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, left: 10 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, left: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className=" w-full px-20 flex flex-grow flex-col"
    >
      <Search />
      <Category />
      <Veggies />
      <Popular />
    </motion.div>
  );
};

export default page;
