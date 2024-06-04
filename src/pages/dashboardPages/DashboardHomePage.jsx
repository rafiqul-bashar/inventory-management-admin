//  check https://freefrontend.com/tailwind-hero-sections/ for hero sections

export const DashboardHomePage = () => {
  return (
    <>
      <main className="">
        <div className="grid mb-4 pb-10 px-8 bg-gray-100 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
              <div className="col-span-12 mt-8">
                <div className="flex items-center h-10 intro-y">
                  <h2 className="mr-5 text-lg font-medium truncate">
                    Dashboard
                  </h2>
                </div>
              </div>
              <div className="col-span-12 mt-5">
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                  <div className="bg-white shadow-lg p-4" id="chartline">
                    A
                  </div>
                  <div className="bg-white shadow-lg">B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
