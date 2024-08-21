import React from 'react'
import { Row ,Col,Card} from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";

const ItemsList = ({itemsData}) => {
    return (
        <Row>
        <Zoom left>
        {
            itemsData.length >=1  ? (itemsData.map((item)=>{
                return(
                <Col key={item.id} sm="12" className='mb-3 mt-3' style={{backgroundColor:"f8f8f8"}}>
                    <Card className='d-flex flex-row'>
                    <Card.Img style={{width:"252px"}} className='img-item ' src={item.img} variant='top' />
                    <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                    <div className='item-title'>
                        {item.title}
                    </div>
                    <div className='item-price'>{item.price}</div>
                    </Card.Title>
                    <Card.Text className='item-description py-2'>
                    <div>{item.description}</div>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )
            }))
            : <h2>لا يـوجـد أصنـاف</h2>
        }
        </Zoom>
            
        </Row>
        )
}

export default ItemsList;
