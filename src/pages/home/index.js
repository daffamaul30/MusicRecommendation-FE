import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Home = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState();

  const onOkClick = () => {
    if (name.length > 0) {
      localStorage.setItem('name', name);
    } else if (name.length === 0) {
      setError("You haven't filled in your name");
    }
  };

  const hideError = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <div style={{ position: 'fixed', width: '100%', textAlign: 'center' }}>
          <Alert onClick={hideError} variant="danger">
            {error}
          </Alert>
        </div>
      )}
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
        <Form style={{ marginTop: '20px' }}>
          <Form.Group>
            <Form.Control
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Please insert your name..."
            />
          </Form.Group>
          <Link onClick={onOkClick} to={name ? '/musicrecommendation' : '/'}>
            <Button
              style={{ position: 'absolute', right: '0', marginRight: '20px' }}
              variant="primary"
              type="button"
            >
              Ok
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default Home;
