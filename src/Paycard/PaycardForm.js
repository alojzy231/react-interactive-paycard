import '../styles/paycardForm.css';

import { Form, Col, Row, Button } from 'react-bootstrap';

export default function PaycardForm(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const getNext10Years = currYear => {
        let years = [];
        for(let year = currYear; year < currYear + 10; year++){
            years.push(year);
        }

        return years;
    };
    
    const years = getNext10Years(new Date().getFullYear());

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <Form className="paycard-form">
            <Row>
                <Form.Group  as={Col} controlId="formGridCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="number" placeholder="Enter card number" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridCardName">
                <Form.Label>Card Name</Form.Label>
                <Form.Control type="text" placeholder="Enter card name" />
                </Form.Group>
            </Row>
            <Row>
                
                <Form.Group as={Col} controlId="formGridExpirationMonth">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control as="select" defaultValue="Month">
                    <option disabled>Month</option>
                    {months.map((month, index) => <option key={index}>{month}</option>)}
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridExpirationYear">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control as="select" defaultValue="Year">
                    <option disabled>Year</option>
                    {years.map((year, index) => <option key={index}>{year}</option>)}
                </Form.Control>
                </Form.Group>

                <Form.Group  as={Col} controlId="formGridCW">
                <Form.Label>CW</Form.Label>
                <Form.Control type="number" placeholder="Enter CW" />
                </Form.Group>
            </Row>
            <Row>
                <div className="text-center">
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                    </Button>
                </div>
                
            </Row>
            
            
        </Form>
    );
}