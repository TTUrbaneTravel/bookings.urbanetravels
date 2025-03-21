import Breadcrumb from "../Breadcrumb";

const EscalationMatrix = () => {
  // Example Data for the Escalation Matrix
  const data = [
    { supportType: "Technical", email: "techsupport@example.com", phone: "+1 800 123 4567" },
    { supportType: "Billing", email: "billing@example.com", phone: "+1 800 234 5678" },
    { supportType: "Customer Care", email: "customercare@example.com", phone: "+1 800 345 6789" },
    { supportType: "HR", email: "hr@example.com", phone: "+1 800 456 7890" },
  ];

  return (
    <>
      <Breadcrumb pageName="Escalation Matrix"  breadcrumbs={[{ name: 'Support /', link: '#' }]}/>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Table Header */}
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h3 className="font-medium text-baseColor dark:text-white">Escalation Matrix</h3>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-8 border-t border-stroke py-4 px-4 dark:border-strokedark md:px-6 2xl:px-7.5 bg-gray-800">
          <div className="col-span-2 font-medium text-baseColor dark:text-white">Support Type</div>
          <div className="col-span-2 font-medium text-baseColor dark:text-white">Email Id</div>
          <div className="col-span-2 font-medium text-baseColor dark:text-white">Phone No.</div>
        </div>

        {/* Table Rows */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 sm:grid-cols-8 border-t border-stroke py-4 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
          >
            <div className="col-span-2 text-sm text-baseColor dark:text-white">{item.supportType}</div>
            <div className="col-span-2 text-sm text-baseColor dark:text-white">{item.email}</div>
            <div className="col-span-2 text-sm text-baseColor dark:text-white">{item.phone}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EscalationMatrix;
