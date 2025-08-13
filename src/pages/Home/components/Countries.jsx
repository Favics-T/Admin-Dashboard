import React from 'react';
import Flag from 'react-world-flags';

const countries = [
  { country: 'Pakistan', code: 'PK', perc: "54%" },
  { country: 'Germany', code: 'DE', perc: "32%" },
  { country: 'United States', code: 'US', perc: "27%" },
  { country: 'Spain', code: 'ES', perc: "25%" },
];

const CountryCard = ({ country, code, perc }) => {
  return (
    <div className='flex w-[200px] justify-between text-[#3A3541] text-[16px] lato items-center'>
      <div className='flex items-center gap-3'>
        <Flag code={code} style={{ width: 24, height: 16, borderRadius: '2px' }} />
        <p>{country}</p>
      </div>
      <p className=''>{perc}</p>
    </div>
  );
};

const Countries = () => {
  return (
    <div className='bg-white text-[#3A3541] text-[16px] text-[] lato rounded-lg flex items-center py-8 justify-center w-[290px] md:w-[250px] h-[340px] shadow-md'>
      <div className='flex flex-col gap-8 w-full px-4'>
        <h1 className='font-medium text-[20px]'>Top Countries</h1>
        <div className='flex flex-col gap-10'>
          {countries.map(({ country, code, perc }) => (
            <CountryCard key={country} country={country} code={code} perc={perc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
