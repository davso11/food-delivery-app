export function IconButton({ children, bg = 'bg-grey-light', className = '' }) {
  return (
    <button className={`inline-block rounded-2xl ${bg} p-[14px] ${className}`}>
      {children}
    </button>
  );
}
