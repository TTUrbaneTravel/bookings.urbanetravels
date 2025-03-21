import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B'],
  labels: ['Remote', 'Hybrid', 'Onsite', 'Leave'],
  legend: {
    show: true,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree = () => {
  const [state, setState] = useState({
    series: [65, 34, 12, 56],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default 
    dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-baseColor dark:text-white">
            Visitors Analytics
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 
            text-sm font-medium outline-none">
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={state.series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {[
          { label: 'Desktop', color: 'bg-primary1', value: '65%' },
          { label: 'Tablet', color: 'bg-[#6577F3]', value: '34%' },
          { label: 'Mobile', color: 'bg-[#8FD0EF]', value: '45%' },
          { label: 'Unknown', color: 'bg-[#0FADCF]', value: '12%' },
        ].map((item, index) => (
          <div key={index} className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className={`mr-2 block h-3 w-full max-w-3 rounded-full ${item.color}`}></span>
              <p className="flex w-full justify-between text-sm font-medium text-baseColor dark:text-white">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;
