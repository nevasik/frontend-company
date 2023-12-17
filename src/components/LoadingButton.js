import Button from 'react-bootstrap/Button';

function LoadingButton({size = "md", variant = "primary", isLoading=false, text, onClick}) {
    return (
        <Button
            size={size}
            variant={variant}
            disabled={isLoading}
            onClick={!isLoading ? onClick : null}
        >
            {isLoading ? 'Подождите' : text}
        </Button>
    );
}

export default LoadingButton;