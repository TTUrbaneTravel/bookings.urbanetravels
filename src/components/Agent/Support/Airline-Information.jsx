import Breadcrumb from '../Breadcrumb';

const AirlineInformation = () => {
  // Example Data for Airline Information
  const data = [
    {
      slNo: '1',
      airlineName: 'Air India',
      contact1: '+91 9876543210',
      contact2: '+91 9876543211',
      contact3: '+91 9876543212',
      contact4: '+91 9876543213',
    },
    {
      slNo: '2',
      airlineName: 'IndiGo',
      contact1: '+91 9765432109',
      contact2: '+91 9765432110',
      contact3: '+91 9765432111',
      contact4: '+91 9765432112',
    },
    {
      slNo: '3',
      airlineName: 'SpiceJet',
      contact1: '+91 9654321098',
      contact2: '+91 9654321099',
      contact3: '+91 9654321100',
      contact4: '+91 9654321101',
    },
    {
      slNo: '4',
      airlineName: 'Vistara',
      contact1: '+91 9543210987',
      contact2: '+91 9543210988',
      contact3: '+91 9543210989',
      contact4: '+91 9543210990',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Airline Information"  breadcrumbs={[{ name: 'Support /', link: '#' }]} />

      <div className="bg-blue-100 dark:bg-gray-800 p-4">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">
          Dear Partner,
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Here are the airline contact numbers which you can use in case of any
          emergency.
        </p>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Table Header */}
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h3 className="font-medium text-baseColor dark:text-white">
            Airline Information
          </h3>
        </div>

        {/* Table Headings */}
        <div className="grid grid-cols-12 border-t border-stroke p-3 dark:border-strokedark md:px-6 2xl:px-7.5 bg-gray-100 dark:bg-gray-800 font-medium text-baseColor dark:text-white">
          <div className="col-span-2">Sl. No.</div>
          <div className="col-span-2">Airline Name</div>
          <div className="col-span-2">Contact No. 1</div>
          <div className="col-span-2">Contact No. 2</div>
          <div className="col-span-2">Contact No. 3</div>
          <div className="col-span-2">Contact No. 4</div>
        </div>

        {/* Table Rows */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 border-t border-stroke py-4 px-4 dark:border-strokedark md:px-6 2xl:px-7.5 text-baseColor dark:text-white"
          >
            <div className="col-span-2 text-sm">{item.slNo}</div>
            <div className="col-span-2 text-sm">{item.airlineName}</div>
            <div className="col-span-2 text-sm">{item.contact1}</div>
            <div className="col-span-2 text-sm">{item.contact2}</div>
            <div className="col-span-2 text-sm">{item.contact3}</div>
            <div className="col-span-2 text-sm">{item.contact4}</div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-red-600 dark:text-red-400 font-semibold">
          Service Charge of Rs. 25/Passenger will be charged for cancellations
          done after 5th January 2011.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Please cancel with the airline directly in any of the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li>Departure time within next 24 hours</li>
          <li>Not able to contact the helpdesk</li>
          <li>Helpdesk support not available (in case of public holidays)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          In such cases, after doing the cancellations, make a ticket
          cancellation online request.
        </p>
      </div>
    </>
  );
};

export default AirlineInformation;
