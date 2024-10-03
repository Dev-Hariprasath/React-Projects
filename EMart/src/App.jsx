import Header from './Header'
import Card from './Card'
import Content from './Content'
import Footer from './Footer'



function App (){
  return (
    <>
    <Header />
    <Card name = "Mango" price={559} />
    <Card name = "Apple" price={457} />
    <Card name = "Orange" price={509} />
    <Card name = "banana" price={409} />
    <Card name = "Ice Cream" price={888} />
    <Card name = "Water" price={751} />
    <Card name = "Co-Co" price={526} />
    <Card name = "Milk" price={329} />
    <Card name = "Cake" price={205} />
    <Card name = "Biscut" price={559} />
    <Content />
    <Footer />
    </>
  )
}

export default App
