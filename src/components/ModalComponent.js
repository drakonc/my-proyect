import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class ModalComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.handleModal()}>Abrir Modal</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton className="bkg-Modal">Modal Header</Modal.Header>
                    <Modal.Body>Modal Body {this.props.name}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success">Aceptar</Button>
                        <Button onClick={() => this.handleModal()} variant="danger">Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalComponent;