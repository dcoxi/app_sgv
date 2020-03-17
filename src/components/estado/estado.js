import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class NovoEstado extends Component{
    render(){
        return(
            <div class="form-wrapper">
            <Form>
              <Form.Group controlId="designacao">
                <Form.Label>Designação</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>

              <Form.Group controlId="Tipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
      
              <Button variant="danger" size="lg" block="block" type="submit">
               Novo 
              </Button>
            </Form>
          </div>
        )
    }
}