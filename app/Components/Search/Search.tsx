import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FormStyle } from '@/app/styles/styles';
import { useRouter } from 'next/navigation';
const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FaSearch />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pizzaaa.."
      />
    </FormStyle>
  );
};

export default Search;
