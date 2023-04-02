import { Container } from './Container';
import { PromotionCard } from './PromotionCard';

export function PromotionList({ promotions }) {
  return (
    <section className="mt-6 px-4">
      <Container>
        <div className="grid w-full grid-cols-promotions gap-[30px]">
          {promotions.map((promo) => (
            <PromotionCard
              key={promo.id}
              {...promo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
