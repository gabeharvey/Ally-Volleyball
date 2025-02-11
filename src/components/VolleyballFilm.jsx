/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#FFD700"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#505050"
        bgImage="linear-gradient(-45deg, #505050 25%, transparent 25%, transparent 50%, #505050 50%, #505050 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F8F8FF" h="30%">
          <Text fontSize="lg" fontWeight="semibold" color="#734F96" fontFamily="'Bungee', serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#734F96" fontFamily="'Roboto', serif">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function VolleyballFilm() {
    const videos = [
        {
          videoSrc: "fearless-dive.mp4",
          title: "Fearless Dive",
          description: "Laying Everything on the Line",
        },
        {
          videoSrc: "ally-vid-3.mov",
          title: "Excellent Serve",
          description: "Pinpoint Accuracy on Serve",
        },
        {
          videoSrc: "ally-leadership.mp4",
          title: "Leadership",
          description: "Demonstrating Leadership Qualities Between Plays",
        },
        {
          videoSrc: "ally-command.mp4",
          title: "Maintaining Command",
          description: "Command and Strategy with Positivity",
        },
        {
          videoSrc: "ally-ready.mp4",
          title: "Always Alert",
          description: "Alert and in Position",
        },
        {
          videoSrc: "ally-teammate.mp4",
          title: "Commands Respect",
          description: "Maintaining Respect and Command of Teammates",
        },
        {
          videoSrc: "ally-calm.mp4",
          title: "Calm Under Pressure",
          description: "Always Calm an Collected in High Pressure",
        },
        {
          videoSrc: "libero-leadership.mp4",
          title: "Libero Leadership",
          description: "Vocal and Locked In During Play",
        },
      ];       

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
    //   bgImage="url('/volleyball-2.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="3xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif">
        Volleyball Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
      <Box
        w="100%"
        h="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        border="none"
      >
        <img
          src="/volleyball-2.png"
          alt="Volleyball Net"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </Box>
    </VStack>
  );
}

export default VolleyballFilm;
