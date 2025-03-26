const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue500 via-blue300 to-white flex-col">
      <div className="h-12 w-12 animate-spin rounded-full border-8 border-solid border-white border-t-transparent"></div>
      <div className="text-white text-lg font-semibold mt-4">Loading</div>
    </div>
  );
};

export default Loader;