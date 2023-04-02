import Image from 'next/image';
import { ShoppingCartIcon, ClockIcon } from '@heroicons/react/24/outline';
import { toUSD } from '@/utils/currency';

export function RestaurantCard(restaurant) {
  return (
    <article className="relative overflow-hidden rounded-2xl">
      <div
        className={`absolute right-0 top-0 z-10 rounded-bl-2xl bg-primary px-4 py-2 text-xs font-bold uppercase text-white ${
          restaurant.featured ? 'block' : 'hidden'
        }`}
      >
        Featured
      </div>

      <div className="relative h-[10rem] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={restaurant.img}
          alt={restaurant.name}
          className="object-center"
          fill
        />
      </div>

      <div className="rounded-b-2xl border border-grey-light p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{restaurant.name}</h3>
          <div>
            <ShoppingCartIcon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <ul className="mt-[6px] flex items-center gap-2">
          <li>
            <ClockIcon className="h-4 w-4 text-gray-300" />
          </li>
          <li className="text-xs font-medium text-grey">
            <span>{restaurant['min-delivery-time']}</span>
            {'-'}
            <span>{restaurant['max-delivery-time']}</span> min
          </li>
          <li>
            <div className="h-[3px] w-[3px] rounded-full bg-primary" />
          </li>
          <li className="text-xs font-medium text-grey">
            <span>{toUSD(restaurant['min-order-price'])}</span> min sum
          </li>
        </ul>
        <div className="mt-[0.875rem] flex gap-2">
          {restaurant.tags.map((tag) => (
            <div className="flex gap-2 rounded-full bg-grey-light px-3 py-2">
              <Image
                src={tag.img}
                alt={`${tag.label} emoji`}
                width={12}
                height={12}
                className="inline-block object-contain"
                priority
              />

              <span className="inline-block text-xs font-semibold text-grey">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
