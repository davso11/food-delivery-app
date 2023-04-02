import { CategoryCard } from './CategoryCard';
import { Container } from './Container';

export function CategoryList({ categories }) {
  return (
    <section className="mt-8 px-4">
      <Container>
        <ul className="grid w-full grid-cols-categories gap-4 md:gap-[1.875rem]">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
