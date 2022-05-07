import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthModal from '../../Modal/Auth/AuthModal';

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <AuthModal />
      <Button
        onClick={() => setAuthModalState({ open: true, view: 'login' })}
        variant="outline"
        height="28px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={1.5}
      >
        Log in
      </Button>
      <Button
        onClick={() => setAuthModalState({ open: true, view: 'signup' })}
        height="28px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
      >
        Sign up
      </Button>
    </>
  );
};
export default AuthButtons;
