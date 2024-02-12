import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CakeProm from './components/CakeProm'
import Variant from './components/Variant'
import './App.css'
import Data from './data'
import WhyChooseUs from './components/WhyChooseUs'
import WCUCards from './components/WhyChooseUsCards'
import DataWCU from './whyChooseUsData'
import Featured from './components/FeaturedProductsCards'
import Location from './components/Location'
import Experience from './components/Experience'
import Customers from './components/CustomersCards'
import Newsletter from './components/Newsletter'
import Story from './components/Story_Cards'


function App() {
  const setData = Data.map(e => {
    return <Variant title={e.name} img ={e.img} description ={e.description} />
  })

  const setDataWCU = DataWCU.map(e => {
    return <WCUCards title={e.name} img = {e.img} description ={e.description}/>
  })
  return(
    <>
    <Navbar></Navbar>
    <Hero></Hero> 
    <CakeProm></CakeProm>
    <h1 className='cake_Title'>Cake <span>Variant</span></h1>
    {setData}
    <WhyChooseUs></WhyChooseUs>
    {setDataWCU}
    <Featured></Featured>
    <Location></Location>
    <Experience/>
    <Customers/>
    <Newsletter/>
    <Story/>

    </>
  )
 
}

export default App
