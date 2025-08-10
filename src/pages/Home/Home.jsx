import React from 'react';
import ActiveUsers from './ActiveUsers';
import Sales from './Sales';
import TotalEarning from './components/TotalEarning';
import EarningByItem from './components/EarningByItem';
import Impression from './components/Impression';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      
      {/* Left Column: Active Users & Sales */}
      <section className="flex flex-col gap-6 flex-1">
        <ActiveUsers />
        <Sales />
      </section>

      {/* Right Column: Earnings & Impression */}
      <section className="grid grid-rows-3 gap-6 flex-1">
        <TotalEarning />
        <EarningByItem />
        <Impression />
      </section>

    </div>
  );
};

export default Home;
