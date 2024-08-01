function Wrapper({ children }) {
  return (
    <div className='container mx-auto min-h-full px-6 md:px-9 content-center'>
      {children}
    </div>
  );
}

export default Wrapper;
