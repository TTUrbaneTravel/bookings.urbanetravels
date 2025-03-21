import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';

const CommissionDetails = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    'Price Markup Setting',
    'International Commission Settings',
    'Hotel Commission',
    'Buses Commission',
    'Holidays Commission',
  ];

  const renderTable = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Airline Code
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Commission Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Basic
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    YQ
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Full Fare
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Cash Back
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Transaction Fees Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Transaction Fees On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Transaction Fees
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">S5</td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="500" className="w-full p-2 border rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="500" className="w-full p-2 border rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="500" className="w-full p-2 border rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="500" className="w-full p-2 border rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Basic Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="500" className="w-full p-2 border rounded" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Breadcrumb pageName="Show Commission Details" breadcrumbs={[{ name: 'Admin /', link: '#' }]} />

      <div className="bg-cover bg-center flex items-center justify-center relative">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-7xl w-full mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center border-b pb-2">
            {tabs.map((tabName, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-lg rounded-md transition duration-300 border focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md 
                  ${selectedTab === index + 1 ? 'bg-blue-600 text-gray-600 font-semibold' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-blue-500'}`}
                onClick={() => setSelectedTab(index + 1)}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tabs.map((tabName, index) =>
            selectedTab === index + 1 ? (
              <div key={index} className="transition-opacity duration-500 ease-in-out opacity-100">
                <div className="rounded-sm border border-stroke bg-white shadow-default">
                  <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-baseColor">{tabName}</h4>
                  </div>
                  {renderTable(selectedTab)}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default CommissionDetails;
