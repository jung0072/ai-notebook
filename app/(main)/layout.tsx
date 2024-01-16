export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="w-full flex flex-col items-start p-9">
            {children}
        </div>
    )
};
