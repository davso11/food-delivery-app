import Head from 'next/head';
import { PromotionList } from '@/components/PromotionList';
import { CategoryList } from '@/components/CategoryList';
import { RestaurantList } from '@/components/RestaurantList';

export default function Home({ promotions, categories, restaurants }) {
  return (
    <>
      <Head>
        <title>Home - Food Delivery App</title>
      </Head>

      <PromotionList promotions={promotions} />
      <CategoryList categories={categories} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
}

export async function getServerSideProps() {
  const [promotionRes, categoryRes, restaurantRes] = await Promise.all([
    fetch('http://localhost:3000/api/promotions'),
    fetch('http://localhost:3000/api/food-categories'),
    fetch('http://localhost:3000/api/restaurants'),
  ]);

  const [promotions, categories, restaurants] = await Promise.all([
    promotionRes.json(),
    categoryRes.json(),
    restaurantRes.json(),
  ]);

  return {
    props: {
      promotions,
      categories,
      restaurants,
    },
  };
}
