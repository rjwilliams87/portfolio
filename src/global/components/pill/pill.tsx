export function Pill(props: { children: string | React.ReactNode }) {
  const { children, ...rest } = props;
  return (
    <div className="px-4 py-2 bg-accent-1 text-accent-2 rounded-full" {...rest}>
      {children}
    </div>
  );
}
