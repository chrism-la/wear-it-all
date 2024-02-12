import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowCard({ imageData }) {
    const handleBuyClick = async () => {
        try {
            const response = await fetch(`http://localhost:3127/items/${imageData.item_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ item_id: imageData.item_id }),
            });
            if (response.ok) {
                console.log('Item deleted successfully');
            } else {
                console.error('Failed to delete Item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageData.image} alt={imageData.image} />
            <Card.Body>
                <Card.Title>{imageData.name}</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" onClick={handleBuyClick}>
                    Buy
                </Button>
                <Button variant="primary">Update</Button>
            </Card.Body>
        </Card>
    );
}

export default ShowCard;
