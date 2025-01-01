const BooksLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid place-items-center ">
      {/* <div className="flex justify-center align-items-center flex-col gap-8"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default BooksLayout;
