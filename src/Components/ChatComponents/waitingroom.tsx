import {useState} from "react";
import {Form, Col, Row, FormControl, FormGroup, Button} from "react-bootstrap";

interface WaitingRoomProps {
    joinChatRoom: (userFrom: string, userTo: string) => Promise<void>;
}

const WaitingRoom : React.FC<WaitingRoomProps> =({joinChatRoom}  ) =>{
    const[userFrom, setUserFrom] = useState('');
    const[userTo, setUserTo] = useState('');

    // @ts-ignore
    return <Form onSubmit={
        e => {
            e.preventDefault();
            joinChatRoom(userFrom, userTo);
        }
    }>
        <Row className='px-5 my-5'>
            <Col sm='12'>
                <FormGroup>
                    <FormControl placeholder='ChatFrom'
                                 onChange={e => setUserFrom(e.target.value)}/>
                    <FormControl placeholder='ChatTo'
                                 onChange={e => setUserTo(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col sm='12'>
                <hr/>
                <Button variant='success' type={"submit"}> join chat </Button>
            </Col>
        </Row>

    </Form>
}
export default WaitingRoom;
