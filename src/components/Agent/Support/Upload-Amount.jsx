import Breadcrumb from '../Breadcrumb';

const UploadAmount = () => {
  return (
    <>
      <Breadcrumb pageName="Upload Amount"  breadcrumbs={[{ name: 'Support /', link: '#' }]} />

      {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
        {/* <div className="flex flex-col gap-9"> */}
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-baseColor dark:text-white">
                Upload Amount
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-baseColor dark:text-white">
                      Agency Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Agency Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-baseColor dark:text-white">
                      Agency Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Agency Code"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Contact No."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                   Amount To Uploaded
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  />
                </div>

                <button className="flex justify-center rounded bg-primary1 p-3 font-medium text-gray">
                  Continue To Payment
                </button>
              </div>
            </form>
          </div>
        {/* </div>         */}
      {/* </div> */}
    </>
  );
};

export default UploadAmount;
