import Image from 'next/image';
import { useState } from 'react';

export function CategoryCard({ category }) {
  const { name, img } = category;
  const [selected, setSelected] = useState(false);

  async function handleCheck() {
    setSelected((current) => !current);
  }

  return (
    <li
      className={`inline-block rounded-2xl ${
        selected
          ? 'border-2 border-primary bg-primary-light'
          : 'border border-grey-light'
      }`}
    >
      <label
        htmlFor={name}
        className={`flex cursor-pointer flex-col items-center gap-3 px-4 ${
          selected ? 'py-3' : 'py-[13px]'
        }`}
      >
        <Image
          src={img}
          width={24}
          height={24}
          alt={`${name} emoji`}
        />
        <span
          className={`font-bold capitalize ${
            selected ? 'text-primary' : 'text-grey'
          }`}
        >
          {name}
        </span>
      </label>
      <input
        type="checkbox"
        id={name}
        checked={selected}
        className="hidden"
        onChange={handleCheck}
      />
    </li>
  );
}
