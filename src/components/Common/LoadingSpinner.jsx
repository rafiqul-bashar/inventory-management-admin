export default function LoadingSpinner() {
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-88px)]">
        <p className="mr-1 text-3xl md:text-7xl font-bold">L</p>
        <div className="md:w-12 md:h-12 md:border-8 w-6 h-6 border-4 border-dashed rounded-full animate-spin  border-red-500"></div>
        <p className="ml-1 text-3xl md:text-7xl font-bold">ading....</p>
      </div>
    </>
  );
}
