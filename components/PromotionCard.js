import Image from 'next/image';

export function PromotionCard({ target, label, img, category, bg, color }) {
  return (
    <article
      className={`${bg} items-center justify-between rounded-2xl p-4 pb-0 lg:flex lg:flex-row-reverse lg:justify-end lg:p-0`}
    >
      <div className="lg:my-6 lg:self-stretch">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary-dark">
            {target}
          </span>
          <span className="text-sm text-grey lg:hidden">{category}</span>
        </div>
        <h2 className={`mt-2 text-4xl font-extrabold ${color}`}>{label}</h2>
        <span className="hidden text-sm text-grey lg:mt-10 lg:inline-block">
          {category}
        </span>
      </div>

      <Image
        src={img}
        alt={target}
        className="mx-auto mt-3 lg:m-0"
        width={290}
        height={188}
        priority
      />
    </article>
  );
}
