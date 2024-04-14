import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useFetchAllPosts } from '../../hooks/postsHooks';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup, Col, Row } from 'react-bootstrap';


function TenantHomepage() {
  const { data: allposts, isLoading, isError , error } = useFetchAllPosts();
  console.log(allposts);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>; 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Owner</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/SenderReceiverForm" className='mx-3'>chat</Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/action-1">Action</Dropdown.Item>
                <Dropdown.Item as={Link} to="/action-2">Another action</Dropdown.Item>
                <Dropdown.Item as={Link} to="/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {allposts?.map((post, idx) => (
            <Col key={idx}>
              <Card className="mb-3">
                <Card.Header>{post.postTitle}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.postCategory}</Card.Title>
                  <Card.Text>{post.postAddress}</Card.Text>
                  <Link to={`/${post.postUserId}/details/${post.postId}`}>details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}

export default TenantHomepage;