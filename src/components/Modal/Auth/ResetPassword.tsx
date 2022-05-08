import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { BsDot, BsReddit } from 'react-icons/bs';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Flex direction="column" alignItems="center" width="100%" gap={2}>
      <Icon as={BsReddit} color="brand.100" fontSize={40} />
      <Text fontWeight={700}>Reset your password</Text>
      {success ? (
        <Text>Check your email :)</Text>
      ) : (
        <>
          <Text textAlign="center" fontSize="10pt" mb={2}>
            {
              "Enter the email associated with your account and we'll send you a reset link"
            }
          </Text>
          <form style={{ width: '100%' }} onSubmit={onSubmit}>
            <Input
              required
              autoFocus
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
              fontSize="10pt"
              _placeholder={{ color: 'gray.500' }}
              _hover={{
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
              _focus={{
                outline: 'none',
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
              bg="gray.50"
            />
            <Text textAlign="center" fontSize="10pt" color="red.500" mb={2}>
              {error && error.message}
            </Text>
            <Button
              type="submit"
              width="100%"
              height="36px"
              my={2}
              isLoading={sending}
            >
              Reset Password
            </Button>
            <Flex
              fontSize="9pt"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <Text
                color="blue.500"
                letterSpacing="0"
                cursor="pointer"
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: 'login',
                  }))
                }
              >
                LOG IN
              </Text>
              <Icon as={BsDot} />
              <Text
                color="blue.500"
                letterSpacing="0"
                cursor="pointer"
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: 'signup',
                  }))
                }
              >
                SIGN UP
              </Text>
            </Flex>
          </form>
        </>
      )}
    </Flex>
  );
};
export default ResetPassword;
