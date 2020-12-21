import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { setCookie } from '../../utils/cookie';

const Home = () => {
  const [name, setName] = useState();

  const onOkClick = () => {
    const cookieToken = name;
    setCookie('name', JSON.stringify(cookieToken), 1);
    window.location.replace('/musicrecommendation');
  };

  return (
    <Container
      style={{
        margin: '0',
        padding: '20px',
        position: 'absolute',
        top: '45%',
        textAlign: 'center',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(59, 79, 119, 0.6)',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
        color: 'white',
      }}
    >
      <h2>Welcome</h2>
      <Form onSubmit={onOkClick} style={{ marginTop: '20px' }}>
        <Form.Group>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Please insert your name..."
          />
        </Form.Group>
        <Button
          style={{ position: 'absolute', right: '0', marginRight: '20px' }}
          variant="primary"
          type="button"
          onClick={onOkClick}
        >
          Ok
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
