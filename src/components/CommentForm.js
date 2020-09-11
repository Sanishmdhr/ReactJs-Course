import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function CommentForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleSubmit= (values) => {
    alert("Current state is:" + JSON.stringify(values));
    toggleModal();
  }

  return (
    <>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <div className="form-group row m-2">
              <Label>Rating</Label>
              <Control.select
                model='.rating'
                id="rating"
                name='rating'
                className='form-control'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
            </div>
            <div className="form-group row m-2">
              <Label>Your Name</Label>
              <Control.text
                model='.name'
                id="name"
                name='name'
                className='form-control'
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(10)
                }}
              />
              <Errors
                className='text-danger'
                model='.name'
                show="touched"
                messages={{
                  required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 10 characters or less'
                }}
              />
            </div>
            <div className="form-group row m-2">
              <Label>Comment</Label>
              <Control.textarea
                model='.comment'
                id="comment"
                name='comment'
                rows='8'
                className='form-control'
              />
            </div>
            <div className="form-group row m-2">
              <Button
                type='submit' color="primary">
                Submit
              </Button>
            </div>

          </LocalForm>
        </ModalBody>
      </Modal>
      <Button onClick={toggleModal}
        outline color="secondary">
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
    </>
  )
}

export default CommentForm
