import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import one from "../photos/DSC08419.JPG";
import two from "../photos/DSC08423.JPG";
import three from "../photos/DSC08444.JPG";
import four from "../photos/DSC08476.JPG";
import five from "../photos/DSC08500.JPG";

function App() {
  const cardData = [
    {
      icon: one
    },
    {
      icon:two
    },
    {
      icon:three
    },
    {
      icon:four
    },
    {
      icon:five
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-red-700 via-purple-dark to-blue-500 bg-300% animate-gradient overflow-hidden'>
        {/* Poka dots */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgc3Ryb2tlPSIjZmZkODY2IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-20"></div>
        <div className='relative py-24 text-center text-white max-w-6xl mx-auto px-4'>
          <h1 className='text-6xl font-bold mb-6'>
            About Us
          </h1>
          <p className='text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Empowering the next generation through financial literacy
          </p>
          <div className='flex justify-center gap-8 mt-16'>
            <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl w-48 transform hover:scale-105 transition-all duration-300 hover:bg-white/20'>
              <h3 className='text-white text-5xl font-bold mb-3'>10+</h3>
              <p className='text-white/90'>Team Members</p>
            </div>
            <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl w-48 transform hover:scale-105 transition-all duration-300 hover:bg-white/20'>
              <h3 className='text-white text-5xl font-bold mb-3'>100+</h3>
              <p className='text-white/90'>Students Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-blue-700 text-center mb-16'>
            Gallery
          </h2>
          <div className='max-w-4xl mx-auto'>
            <Carousel>
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
