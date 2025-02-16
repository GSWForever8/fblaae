import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const imageNumbers = [419,423,425,442,444,445,456,457,460,464,466,469,473,474,476,477,479,483,484,486,487,488,489,491,492,493,494,497,498,499,500,501,504,505,506,507,509,524,525,526];
const images = imageNumbers.map(num => `/photos/DSC08${num}.JPG`);

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <main className='flex-grow p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images.map((src, index) => (
            <div key={index} className='overflow-hidden rounded-lg shadow-lg'>
              <img src={src} alt={`Gallery ${index + 1}`} className='w-full h-60 object-cover'/>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;