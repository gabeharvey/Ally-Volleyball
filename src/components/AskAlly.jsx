import { Box, VStack, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function AskAlly() {
  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="3xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif" mb="5" textAlign="center">
        Ask Ally
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="300px"
          m="5"
          bgColor="#E6E6FA"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#FFD700"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <video width="100%" height="100%" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default AskAlly;
