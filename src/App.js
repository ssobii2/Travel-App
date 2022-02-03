import Card from "./Card";
import Navbar from "./Navbar";
import Data from "./data"

function App() {
  const Cards = Data.map((data) => {
    return <Card 
      key={data.id}  
      {...data}
      // title={data.title}
      // location={data.location}
      // googleMapsUrl={data.googleMapsUrl}
      // startDate={data.startDate}
      // endDate={data.endDate}
      // description={data.description}
      // imageUrl={data.imageUrl}
    />
  })
  
  return (
    <div className="App">
      <Navbar />
      {Cards}
    </div>
  );
}

export default App;
