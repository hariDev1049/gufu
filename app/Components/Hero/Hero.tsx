'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Hero = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/allreciepes');
  };

  return (
    <div className="flex-grow flex items-center">
      <motion.div
        initial={{ opacity: 0, left: 10 }}
        animate={{ opacity: 1, left: 0 }}
        exit={{ opacity: 0, left: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex  justify-center items-center flex-grow w-1/2 h-full"
      >
        <div className="pl-20">
          <h1 className="px-10 text-5xl font-extrabold">
            <span className="text-lime-800">Gu</span>od{' '}
            <span className="text-lime-800">Fu</span>od
          </h1>
          <h4 className="px-10 pt-12 pb-2 text-balance text-lg">
            Discover culinary delights with our food recipe app! Explore a
            diverse range of recipes from around the world, curated for every
            taste and skill level. With easy-to-follow instructions and
            ingredient lists, cooking delicious meals at home has never been
            easier. Let our app inspire your next culinary adventure!
          </h4>
          <button
            className="ml-10 mt-7 bg-lime-800 p-3 rounded text-white"
            onClick={handleClick}
          >
            Explore Recipes
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center flex-grow w-1/2 h-full"
        initial={{ opacity: 0, left: 10 }}
        animate={{ opacity: 1, left: 0 }}
        exit={{ opacity: 0, left: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src="/hero.jpg" alt="hero_section" height={600} width={400} />
      </motion.div>
    </div>
  );
};

export default Hero;
