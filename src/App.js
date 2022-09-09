/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import CatalogItem from './components/CatalogItem';
import CatalogSearch from './components/CatalogSearch';
import Filter from './components/Filter';
import HeaderNavigation from './components/HeaderNavigation';
import { useResizeDetector } from 'react-resize-detector';


function App() {
  const { width, ref } = useResizeDetector();

  const catalog = [
    {
      name: 'Fibre Cable Tight Buffered MM 16 Fibre OM3 50/125 LSZH Eca Black ( Dia ) 7.8mm',
      description: 'Distribution or mini-break-out cable suitable for use in many indoor and outdoor applications. Features new and improved ES9 tight buffer. Typical applications include LAN and WAN backbones...',
      partNumber: '60019533',
      found: "Found in your catalog and 5 others"
    },
    {
      name: 'DYNAmic Server Cabinet 47Ux6x10 Vented Vented Removable Adj Feet & Earth Kit',
      description: 'This standard series of Lande cabinets provides an ideal environment for housing server and IT equipment, available from 26U to 47U and up to 1200mm deep.',
      partNumber: "DAT60019533",
      found: "Found in your catalog and 2 others"
    },
    {
      name: 'Cable Ties Metal Content Tie ( MCT ) Magnetic and X - Ray Detectable Blue',
      description: 'The metal content cable tie is designed for use in the food and pharmaceutical processing industries. A unique manufacturing process, involving the inclusion of a metallic pigment.',
      partNumber: "60019533",
      found: "Also found in 4 others catalog"
    },
    {
      name: 'DSX2-5000 Cat6A DSX2-5000 INT',
      description: 'Fluke Networks DSX2-5000 copper cabling certifier . Tests up to TIA Cat6A or ISO/IEC Class FA . Full Cat5e/6 2 - way autotest in 9 seconds . Full Cat6A. 2-way autotest in just 10 seconds. WiFi enabled',
      partNumber: "60019533LA01",
      found: "Found in Comtec catalog and 1 other"
    },
  ]

  return (
    <div className="App flex flex-col h-screen" ref={ref}>
      <HeaderNavigation width={width} />
      <div className='flex justify-center'>
        {/* <div className='max-w-[1920px] w-full px-[15px] py-[15px] md:px-[70px] md:py-[45px] flex-1 flex  gap-[15px] md:gap-[39px] flex-wrap-reverse justify-center'> */}
        <div className='max-w-[1920px] w-full px-[15px] py-[15px] md:px-[70px] md:py-[45px] flex-1 flex flex-col-reverse lg:flex-row gap-[15px] md:gap-[39px] justify-center'>
          <div className=' flex-1 lg:min-w-[500px]'>
            <CatalogSearch />
            {/* <div className='mt-[30px] md:mt-[39px]  max-w-[1002px] debug'> */}
            <div className='mt-[30px] md:mt-[39px] '>
              {
                catalog && catalog.map((item, index) => (
                  <CatalogItem key={index.toString()} item={item} />
                ))
              }
            </div>
          </div>
          <Filter width={width}/>
        </div>
      </div>
    </div>
  );
}

export default App;
