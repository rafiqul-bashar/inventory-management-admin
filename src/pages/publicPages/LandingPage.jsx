import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <section className="text-gray-800 bg-gray-50">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-5xl">
              Empower Your Business with Ecomgrove's Product Management
            </h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              Take control of your products and streamline your business
              operations with Ecomgrove. Our cloud-based software simplifies
              product management, allowing small-business owners to focus on
              growth and success.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/login"
                className="px-8 py-2 m-2 text-lg border-2 border-gray-800 font-semibold rounded bg-gray-800 text-gray-50 hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 ease-out"
              >
                Get started
              </Link>
              <Link
                to="/register"
                className="px-8 py-2 m-2 text-lg font-semibold rounded  text-gray-700 border-2 border-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-all duration-200 ease-out"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Built to empower every team</h2>
          <p className="dark:text-gray-600">Libero minima optio qui</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
