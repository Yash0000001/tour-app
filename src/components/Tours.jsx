import Card from "./Card.jsx";
function Tours({tours, removeTour}) {
  return (
    <div className="container">
      <div className="cards">
        {
          tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
          } )
        }
      </div>
    </div>
  );
}

export default Tours;
