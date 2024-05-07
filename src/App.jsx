import { Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer } from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b  ">
          <Hero/>
      </section>
    <section className="padding">
      <PopularProducts/>
          </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section >
    <section className='bg-pale-blue padding'>
      <CustomerReviews/>
    </section>
    
    <Subscribe/>
    <Footer/>
  </main>
);
export default App;