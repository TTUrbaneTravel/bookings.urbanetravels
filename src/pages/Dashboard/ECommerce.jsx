import CardFour from '../../components/Agent/CardFour.jsx';
import CardOne from '../../components/Agent/CardOne.jsx';
import CardThree from '../../components/Agent/CardThree.jsx';
import CardTwo from '../../components/Agent/CardTwo.jsx';
import ChartOne from '../../components/Agent/ChartOne.jsx';
import ChartThree from '../../components/Agent/ChartThree.jsx';
import ChartTwo from '../../components/Agent/ChartTwo.jsx';
import TableOne from '../../components/Agent/TableOne.jsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-6 md:col-span-6 ">
          <ChartThree />
        </div>
        <div className="col-span-6 md:col-span-6 ">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;