'use client';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="w-full py-4 flex justify-between">
      <div
        className="pl-28 font-bold text-lime-800 cursor-pointer"
        onClick={handleClick}
      >
        GuFu
      </div>
      <nav className="pr-10">
        <ul className="flex gap-10 text-lime-800">
          <li>About</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
