import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  // HOW TO CREATE USER DOCUMENT USING AUTH PROVIDERS WITHOUT CLOUD FUNCTIONS
  // const parseUser = (user: User) => {
  //   return JSON.parse(JSON.stringify(user));
  // };

  // const createUserDocument = async (user: User) => {
  //   const userDocRef = doc(firestore, 'users', user.uid);
  //   await setDoc(userDocRef, parseUser(user));
  // };

  // useEffect(() => {
  //   if (userCred) {
  //     createUserDocument(userCred.user);
  //   }
  // }, [userCred]);

  return (
    <Flex direction="column" width="100%" gap={2} mb={4}>
      <Button
        variant="oauth"
        gap={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" alt="Google" height="20px" />
        Continue with Google
      </Button>
      <Button variant="oauth" gap={2}>
        {/* <Image src="/images/googlelogo.png" alt="GitHub" height="20px" /> */}
        Continue with GitHub
      </Button>
      {error && (
        <Text fontSize="10pt" color="red.500" mb={2}>
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
