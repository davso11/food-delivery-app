import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Container } from './Container';
import { IconButton } from './IconButton';
import { Search } from './Search';

const navLinks = [
  { id: 1, label: 'Restaurants', path: '/restaurants' },
  { id: 2, label: 'Deals', path: '/deals' },
];

export function Header() {
  return (
    <header className="border-b border-grey-light p-4">
      <Container
        role="navigation"
        className="flex items-center"
      >
        <Link href="/">
          <Image
            src="/img/logo-desktop.svg"
            width={79}
            height={40}
            alt="Logo"
          />
        </Link>

        <Search />

        <div className="ml-auto flex items-center gap-4">
          <ul className="mr-2 hidden lg:flex lg:items-center lg:gap-7">
            {navLinks.map(({ id, label, path }) => (
              <li key={id}>
                <a href={'#'}>{label}</a>
              </li>
            ))}
            <hr className="h-[2rem] w-[1px] bg-grey-light" />
            <li>
              <a href={'#'}>My order</a>
            </li>
          </ul>

          <IconButton bg="bg-primary-light">
            <ShoppingCartIcon className="h-5 w-5 text-primary" />
          </IconButton>

          <Link
            href="/settings"
            className="relative h-12 w-12 overflow-hidden rounded-2xl"
          >
            <div className="absolute left-0 top-0 !z-[1] h-full w-full bg-grey-light" />
            <Image
              src="/img/avatar.svg"
              alt="User profile picture"
              className="relative !z-[2]"
              fill
            />
          </Link>

          <hr className="h-[2rem] w-[1px] bg-grey-light lg:hidden" />

          <IconButton className="lg:hidden">
            <Bars3Icon className="h-5 w-5 text-grey" />
          </IconButton>
        </div>
      </Container>
    </header>
  );
}
