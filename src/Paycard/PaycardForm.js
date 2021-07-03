import '../styles/paycardForm.css';

import { Form, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeCardNumber, changeCardName, changeExpirationDate, changeCVV, changeSelectedInputField } from '../Actions/PaycardActions';

export default function PaycardForm(){
    const identificators = {
        cardNumber : 'cardNumber',
        cardName : 'cardName',
        expirationMonth : 'expirationMonth',
        expirationYear : 'expirationYear',
        cvv : 'cvv'
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const paycardInformation = useSelector(state => state.paycard);
    const dispatch = useDispatch();

    const getNext10Years = currYear => {
        let years = [];
        for(let year = currYear; year < currYear + 10; year++){
            years.push(year);
        }

        return years;
    };
    
    const years = getNext10Years(new Date().getFullYear());

    const validateNumberInput = (value) => {
        const numbers = '0123456789';

        return numbers.includes(value);
    }

    const handleSelectedInputFieldChange = ({target}) => {
        dispatch(changeSelectedInputField(target.id))
    }

    const handleCardNumberChange = ({target}) =>{
        if(validateNumberInput(target.value[target.value.length-1]) 
            && target.value.length <= 12){
            dispatch(changeCardNumber(target.value));
        }
    }

    const handleCardNameChange = ({target}) =>{
        dispatch(changeCardName(target.value));
    }

    const handleExpirationDateChange = (month=paycardInformation.expirationDate.month,
        year=paycardInformation.expirationDate.year) =>{
        dispatch(changeExpirationDate({year, month}));
    }

    const handleExpirationMonthChange = ({target}) =>{
        handleExpirationDateChange(target.value);
    }

    const handleExpirationYearChange = ({target}) =>{
        handleExpirationDateChange( undefined, target.value);
    }

    const handleCVVChange = ({target}) =>{
        
        if(validateNumberInput(target.value[target.value.length-1]) 
            && target.value.length <= 3){
            dispatch(changeCVV(target.value));
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <Form className="paycard-form">
            <Row>
                <Form.Group  as={Col} controlId={identificators.cardNumber}>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter card number" 
                    onChange={handleCardNumberChange}
                    value={paycardInformation.cardNumber}
                    onFocus={handleSelectedInputFieldChange}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId={identificators.cardName}>
                <Form.Label>Card Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter card name" 
                    onChange={handleCardNameChange}
                    onFocus={handleSelectedInputFieldChange}
                    />
                </Form.Group>
            </Row>
            <Row>
                
                <Form.Group as={Col} controlId={identificators.expirationMonth}>
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control 
                    as="select" 
                    defaultValue="Month"
                    onChange={handleExpirationMonthChange}
                    onFocus={handleSelectedInputFieldChange}
                    >  
                    <option disabled>Month</option>
                    {months.map((month, index) => <option key={index}>{month}</option>)}
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId={identificators.expirationYear}>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control 
                    as="select" 
                    defaultValue="Year"
                    onChange={handleExpirationYearChange}
                    onFocus={handleSelectedInputFieldChange}
                    >
                    <option disabled>Year</option>
                    {years.map((year, index) => <option key={index}>{year}</option>)}
                </Form.Control>
                </Form.Group>

                <Form.Group  as={Col} controlId={identificators.cvv}>
                <Form.Label>CVV</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter CVV" 
                    onChange={handleCVVChange}
                    value={paycardInformation.CVV}
                    onFocus={handleSelectedInputFieldChange}
                />
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