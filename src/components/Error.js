import Alert from 'react-bootstrap/Alert';

function Error({title = "Ошибка", children = "Неизвестная ошибка", onClose, timeout = 4000}) {
    setTimeout(onClose, timeout)
    return (
        <Alert variant="danger" onClose={onClose} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            {children}
        </Alert>
    );
}

export default Error;