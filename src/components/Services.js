import React from 'react';
import ChildCareSVG from './noun-childcare-6285795.svg'
import SeniorCareSVG from './noun-senior-care-4835091.svg'
import HousekeepingSVG from './houseKeeping.svg'
import PetCareSVG from './petCare.svg'
import TutoringSVG from './tutorial.svg'


const serviceData = [
  { title: 'Child care', svg: ChildCareSVG },
  { title: 'Senior care', svg: SeniorCareSVG },
  { title: 'Housekeeping', svg: HousekeepingSVG },
  { title: 'Pet care', svg: PetCareSVG },
  { title: 'Tutoring', svg:  TutoringSVG},

];



function ServiceCard({ title, svg, className }) {
  return (
    <div className="flex justify-around">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className='w-full text-center   align-middle'>
          {svg && <img className="w-32 mx-auto" src={svg} alt="Sunset in the mountains" />}
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <div className=''>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Find a Job
            </button>
            <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
              Apply for a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto p-4 master">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {serviceData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              svg={service.svg}
              className="p-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
