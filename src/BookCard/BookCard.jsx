export function BookCard(props) {    
  return (
    <div className="book-card">
        <div className="book-title">
            <h2>Book Card</h2>
        </div>
        <div className="img-book">
            <img src={props.image} alt={props.title} /> 
        </div>
        <div className="book-info">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.read ? "Read" : "To be read"}</p>
        </div>
    </div>
  )
}