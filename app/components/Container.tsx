export default function Container({ children }: { children: React.ReactNode }) {
  /* Change the max-width of each container here, as well as the horizontal padding */
  return <div className="max-w-[1512px] mx-auto px-[120px]">{children}</div>;
}
