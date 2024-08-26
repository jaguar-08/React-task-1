function Card({ card }) {
    return (
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <h3 className="card-price">{card.price}</h3>
            <hr />
            <p className="card-text">{card.user}</p>
            <p className="card-text">{card.storage}</p>
            <p className="card-text">{card.project}</p>
            <p className="card-text">{card.access}</p>
            <p className="card-text">{card.privateProjects}</p>
            <p className="card-text">{card.support}</p>
            <p className="card-text">{card.domain}</p>
            <p className="card-text">{card.status}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    );
  }
  
//   Card.propTypes = {
//     card: PropTypes({
//       title: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//       user: PropTypes.string.isRequired,
//       storage: PropTypes.string.isRequired,
//       project: PropTypes.string.isRequired,
//       access: PropTypes.string.isRequired,
//       privateProjects: PropTypes.string.isRequired,
//       support: PropTypes.string.isRequired,
//       domain: PropTypes.string.isRequired,
//       status: PropTypes.string.isRequired,
//     }).isRequired,
//   };
  
  export default Card;