import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: 'Modal Title',
  children: 'This is the content inside the modal.',
};
