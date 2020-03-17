import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class NovoEstado extends Component{
  
  constructor(props){
    super(props);
    this.onChangeDesignacao = this.onChangeDesignacao.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      designacao: '',
      tipo: ''
    }
  }
  
  onChangeDesignacao(e) {
    this.setState({designacao: e.target.value})
  }

  onSubmit(e) 
  {
    e.preventDefault()

    console.log('Novo estado Adicionado!');
   /* console.log(`Designação: ${this.state.designacao}`);
    console.log(`Tipo: ${this.state.tipo}`);*/

    this.setState({designacao: '', tipo: ''})
  }

  render(){
        return(
            <div className="form-wrapper">
            <Form>
              <Form.Group controlId="designacao">
                <Form.Label>Designação</Form.Label>
                <Form.Control type="text" onChange={this.onChangeDesignacao}/>
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