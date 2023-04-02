import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  UserIcon,
  MapPinIcon,
  CreditCardIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import { Container } from '@/components/Container';

const settingItems = [
  {
    id: 1,
    path: '/settings/account',
    label: 'Account',
    description: 'Personal information',
    Icon: <UserIcon />,
  },
  {
    id: 2,
    path: '/settings/#',
    label: 'Address',
    description: 'Shippings addresses',
    Icon: <MapPinIcon />,
  },
  {
    id: 3,
    path: '/settings/#',
    label: 'Payment method',
    description: 'Connected credit cards',
    Icon: <CreditCardIcon />,
  },
  {
    id: 4,
    path: '/settings/#',
    label: 'Security',
    description: 'Password, 2FA',
    Icon: <ShieldExclamationIcon />,
  },
];

export default function settings() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Settings - Food Delivery App</title>
      </Head>
      <section className="mt-6 px-4">
        <Container>
          <h2 className="heading-2">Settings</h2>

          <ul className="mt-4 space-y-4">
            {settingItems.map((item) => (
              <li
                key={item.id}
                className={`rounded-2xl p-4 hover:border-2 hover:border-primary hover:bg-primary-light hover:p-[15px] ${
                  router.pathname === item.path
                    ? 'border-2 border-primary bg-primary-light p-[15px]'
                    : 'border border-grey-light bg-transparent'
                }`}
              >
                <Link
                  href={item.path}
                  className="flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary p-[10px] text-white">
                    {item.Icon}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-sm">{item.label}</span>
                    <span className="text-[13px] text-grey">
                      {item.description}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
