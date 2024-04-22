'use client';
import { CuisineLink, List } from '@/app/styles/styles';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { GiNoodles, GiNachos, GiChopsticks } from 'react-icons/gi';

const Category = () => {
  const router = usePathname();

  return (
    <List>
      <CuisineLink
        href={'/cuisine/american'}
        className={router == '/cuisine/american' ? 'active' : ''}
      >
        <FaHamburger />
        <h5>American</h5>
      </CuisineLink>
      <CuisineLink
        href={'/cuisine/italian'}
        className={router == '/cuisine/italian' ? 'active' : ''}
      >
        <FaPizzaSlice />
        <h5>Italian</h5>
      </CuisineLink>
      <CuisineLink
        href={'/cuisine/thai'}
        className={router == '/cuisine/thai' ? 'active' : ''}
      >
        <GiNoodles />
        <h5>Thai</h5>
      </CuisineLink>
      <CuisineLink
        href={'/cuisine/mexican'}
        className={router == '/cuisine/mexican' ? 'active' : ''}
      >
        <GiNachos />
        <h5>Mexican</h5>
      </CuisineLink>
      <CuisineLink
        href={'/cuisine/japanese'}
        className={router == '/cuisine/japanese' ? 'active' : ''}
      >
        <GiChopsticks />
        <h5>Japanese</h5>
      </CuisineLink>
    </List>
  );
};

export default Category;
