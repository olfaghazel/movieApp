import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import Rating from './Rating';
import {Link} from 'react-router-dom';

const MovieCard = ({ title, description, posterUrl, rate,id,selectId}) => {
    return (
        <>
        <Card className="card" style={{ border: 'solid white 1px' }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Header style={{ background: "black" }}>
                <Rating rate={rate} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to="/watchtrailer" className="link"><button className="watchTrailer" onClick={()=>{selectId(id)}}>Watch Trailer</button></Link>
            </Card.Footer>
        </Card>
        </>
    );
    
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
}

export default MovieCard;