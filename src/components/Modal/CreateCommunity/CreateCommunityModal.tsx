import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
  Button,
  ModalFooter,
  Box,
  Input,
  Stack,
  Checkbox,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { BsFillPersonFill, BsFillEyeFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';
import { auth, firestore } from '../../../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const MIN_CHARS = 3;
  const MAX_CHARS = 21;
  const [communityName, setCommunityName] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(MAX_CHARS);
  const [communityType, setCommunityType] = useState('public');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= MAX_CHARS) {
      setCommunityName(e.target.value);
      setCharsRemaining(MAX_CHARS - e.target.value.length);
    }
  };
  const handleCommunityTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(e.target.name);
  };

  const handleCreateCommunity = async () => {
    // validate the community
    const specialChars = /[ `!@#£$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    setError('');

    if (specialChars.test(communityName)) {
      setError(
        'Community names can only contain letters, numbers or underscores.'
      );
      return;
    }
    if (communityName.length < MIN_CHARS) {
      setError('Community names must be between 3-21 characters.');
      return;
    }

    setLoading(true);
    try {
      // check if community already exists
      const communityDocRef = doc(firestore, 'communities', communityName);
      const communityDoc = await getDoc(communityDocRef);
      if (communityDoc.exists()) {
        throw new Error(`Sorry, r/${communityName} already exists.`);
      }

      // create the community in firestore
      await setDoc(communityDocRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers: 1,
        privacyType: communityType,
      });
    } catch (err: any) {
      console.log('handleCreateCommunity Error: ', err);
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create Community
          </ModalHeader>
          <Divider />
          <Box px={3}>
            <ModalCloseButton />
            <ModalBody padding="10px 0" display="flex" flexDir="column">
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community names including capitalisation cannot be changed
              </Text>
              <Text
                position="relative"
                top="28px"
                left={2}
                width="20px"
                color="gray.400"
              >
                /r
              </Text>
              <Input
                autoFocus
                position="relative"
                name="community"
                value={communityName}
                size="sm"
                pl="24px"
                onChange={handleChange}
              />
              <Text
                fontSize="9pt"
                color={charsRemaining === 0 ? 'red' : 'gray.500'}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Text fontSize="9pt" color="red" mt={1}>
                {error}
              </Text>
              <Box my={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                <Stack spacing={2}>
                  <Checkbox
                    name="public"
                    isChecked={communityType === 'public'}
                    onChange={handleCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Text fontSize="10pt" mr={2}>
                        Public
                      </Text>
                      <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                      <Text fontSize="8pt" color="gray.500">
                        Anyone can view, post, and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="restricted"
                    isChecked={communityType === 'restricted'}
                    onChange={handleCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Text fontSize="10pt" mr={2}>
                        Restricted
                      </Text>
                      <Icon as={BsFillEyeFill} color="gray.500" mr={2} />

                      <Text fontSize="8pt" color="gray.500">
                        Anyone can view this community, but only approved users
                        can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="private"
                    isChecked={communityType === 'private'}
                    onChange={handleCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Text fontSize="10pt" mr={2}>
                        Private
                      </Text>
                      <Icon as={HiLockClosed} color="gray.500" mr={2} />
                      <Text fontSize="8pt" color="gray.500">
                        Only approved user can view and submit to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg="gray.100" borderRadius="0 0 10px 10px">
            <Button
              variant="outline"
              height="30px"
              mr={2}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              height="30px"
              onClick={handleCreateCommunity}
              isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
