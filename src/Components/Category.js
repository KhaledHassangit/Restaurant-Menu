import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import { Roll } from 'react-awesome-reveal';
const Category = ({filteration,AllCategories}) => {


    // To Filter Categories
    const onFilter=(cat)=>{
        filteration(cat)
    }
    return (
        <Row>
            
            <Col sm="12" className='d-flex    justify-content-center text-center mt-4'>
                <Roll>
                {
                    AllCategories.length >=1 ? (AllCategories.map((cat)=>{
                        return(
                        <div>
                        <span  onClick={()=> onFilter(cat)}>{cat}</span>
                        </div>
                        )
                    })): <h4>لا يوجد أصناف </h4>
                }
                </Roll>
            </Col>
            
        </Row>
    )
}

export default Category
