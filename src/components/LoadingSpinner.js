import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Подождите...</span>
        </Spinner>
    );
}

export default LoadingSpinner;