'use client';
import { useRouter } from 'next/navigation';
import { GiFoodTruck } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  const pathname = usePathname();

  const path = [
    { name: 'Explore', route: '/allreciepes' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
  ];

  return (
    <div className="w-full py-4 flex justify-between px-24">
      <div
        className=" font-bold text-lime-800 cursor-pointer flex items-center justify-center gap-1"
        onClick={handleClick}
      >
        <GiFoodTruck className="text-3xl" />
        <h4 className="mb-0 mt-2 font-bold">GuFu</h4>
      </div>
      <nav className="pr-10">
        <ul className="flex gap-10 text-lime-800">
          {path.map((ele) => (
            <li
              onClick={() => router.push(ele.route)}
              className={
                pathname === ele.route
                  ? 'cursor-pointer font-bold'
                  : 'cursor-pointer'
              }
            >
              {ele.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
