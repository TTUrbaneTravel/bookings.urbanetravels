import Breadcrumb from '../Breadcrumb';

const CancellationPolicy = () => {
  // Cancellation Policy Data
  const cancellationData = [
    {
      airline: 'Vistara',
      nonRefundableClass: 'NIL',
      cancellationCharges: 'As Per Fare And Class Basis 0',
      reschedulingCharges: 'As Per Fare And Class Basis 0',
      cancelChargesForInfant: 'As Per AirLines 0',
      noShowRefunds: 'ONLY SOME TAXES',
      xxl: '4 Hrs',
      reschTime: '4 Hrs',
    },
    {
      airline: 'Air Asia',
      nonRefundableClass: 'NIL',
      cancellationCharges: 'INR 2200',
      reschedulingCharges: 'Fare Difference + INR 1750',
      cancelChargesForInfant: 'NIL 0',
      noShowRefunds: 'ONLY SOME TAXES',
      xxl: '55 Hrs',
      reschTime: '60 Hrs',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Cancellation Policy"  breadcrumbs={[{ name: 'Support /', link: '#' }]} />

      {/* Cancellation Policy Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h3 className="font-medium text-baseColor dark:text-white">
            Cancellation Policy
          </h3>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-8 border-t border-stroke p-3 dark:border-strokedark bg-gray-100 dark:bg-gray-800 font-medium text-baseColor dark:text-white">
          <div className="col-span-1">Airline</div>
          <div className="col-span-1">Non-Refundable Class</div>
          <div className="col-span-1">Cancellation Charges</div>
          <div className="col-span-1">Rescheduling Charges</div>
          <div className="col-span-1">Cancel Charges for Infant</div>
          <div className="col-span-1">No Show Refunds</div>
          <div className="col-span-1">XXL Time</div>
          <div className="col-span-1">Resch Time</div>
        </div>

        {/* Table Rows */}
        {cancellationData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-8 border-t border-stroke py-4 px-4 dark:border-strokedark text-baseColor dark:text-white"
          >
            <div className="col-span-1 text-sm">{item.airline}</div>
            <div className="col-span-1 text-sm">{item.nonRefundableClass}</div>
            <div className="col-span-1 text-sm">{item.cancellationCharges}</div>
            <div className="col-span-1 text-sm">{item.reschedulingCharges}</div>
            <div className="col-span-1 text-sm">
              {item.cancelChargesForInfant}
            </div>
            <div className="col-span-1 text-sm">{item.noShowRefunds}</div>
            <div className="col-span-1 text-sm">{item.xxl}</div>
            <div className="col-span-1 text-sm">{item.reschTime}</div>
          </div>
        ))}
      </div>

      {/* Cancellation Notice */}
      <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li>
            Service Charge of Rs.25/Passenger will be charged for cancellations
          </li>
          <li>
            {' '}
            IN CASE OF CANCELLATION LESS THAN 48 HOUR KINDLY CALL THE RESPECTIVE
            AIRLINES FOR CANCELLATION/REBOOKING AND THEN INFORM B2b Test 2021
            FOR REFUNDS/CONFIRMATION
          </li>
        </ul>
      </div>
    </>
  );
};

export default CancellationPolicy;
