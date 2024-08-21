import React from 'react'
import { Row ,Col} from 'react-bootstrap';

function MainTitle() {
    return (
        <Row>
            <Col sm="12" className='justify-content-center text-center'>
                <div className='title mt-3'>قـائـمـة الطـعـام</div>
                <p className='underline'></p>
            </Col>
        </Row>
    )
}

export default MainTitle
