import Breadcrumb from '../Breadcrumb';

const AddMarkupAfterBooking = () => {
  return (
    <>
      <Breadcrumb pageName="Add Markup After Booking"   breadcrumbs={[{ name: 'Admin /', link: '#' }]}/>

      {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
      {/* <div className="flex flex-col gap-9"> */}
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-baseColor dark:text-white">Add Markup</h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-baseColor dark:text-white">
                  Choose Service
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary1 active:border-primary1 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1">
                    <option value="">Flight</option>
                    <option value="">BUS</option>
                    <option value="">CAB</option>
                    <option value="">CAR</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-baseColor dark:text-white">
                 Confirmation Number/booking Id:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Confirmation Number/booking Id:"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                />
              </div>
            </div>

            <button className="flex justify-center rounded bg-primary1 p-3 font-medium text-gray">
             Show Booking Details
            </button>
          </div>
        </form>
      </div>
      {/* </div>         */}
      {/* </div> */}
    </>
  );
};

export default AddMarkupAfterBooking;
