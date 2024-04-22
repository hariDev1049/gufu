'use client';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="w-full py-4 flex justify-between px-24">
      <div
        className=" font-bold text-lime-800 cursor-pointer"
        onClick={handleClick}
      >
        GuFu
      </div>
      <nav className="pr-10">
        <ul className="flex gap-10 text-lime-800">
          <li
            onClick={() => router.push('/allreciepes')}
            className="cursor-pointer"
          >
            Explore
          </li>
          <li onClick={() => router.push('/about')} className="cursor-pointer">
            About
          </li>
          <li
            onClick={() => router.push('/contact')}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
