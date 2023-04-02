export function Container({ children, role = '', className = '' }) {
  return (
    <div
      role={role}
      className={`mx-auto w-full md:max-w-4xl lg:max-w-[1110px] ${className}`}
    >
      {children}
    </div>
  );
}
