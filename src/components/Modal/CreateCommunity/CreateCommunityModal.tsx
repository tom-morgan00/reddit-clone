import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import AuthInputs from '../Auth/AuthInputs';
import OAuthButtons from '../Auth/OAuthButtons';
import ResetPassword from '../Auth/ResetPassword';

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            This is the body
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
