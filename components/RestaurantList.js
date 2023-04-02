import { useState } from 'react';
import { Container } from './Container';
import { RestaurantCard } from './RestaurantCard';

export function RestaurantList({ restaurants }) {
  const [allRestaurants] = useState(Object.values(restaurants).flat());

  return (
    <section className="my-8 px-4">
      <Container>
        <h2 className="heading-2">Nearby restaurants</h2>
        <ul className="mt-4 grid w-full grid-cols-restaurants gap-[1.875rem]">
          {allRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
