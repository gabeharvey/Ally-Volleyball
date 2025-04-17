import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

function VolleyballFilm() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const maxX = isMobile ? 100 : 400; 
  const maxY = isMobile ? -30 : -90;  

  const volleyballSpring = useSpring({
    from: { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
    to: async (next) => {
      const bounceSequence = (dir = 1) => [
        { x: 0.2 * maxX * dir, y: 0.5 * maxY, r: 720 * dir, s: 1.05 },
        { x: 0.3 * maxX * dir, y: 0.75 * maxY, r: 1440 * dir, s: 1.1 },
        { x: 0.5 * maxX * dir, y: maxY, r: 2160 * dir, s: 1.15 },
        { x: 0.6 * maxX * dir, y: 0.5 * maxY, r: 2880 * dir, s: 1.1 },
        { x: 0.7 * maxX * dir, y: 0.25 * maxY, r: 3600 * dir, s: 1.05 },
        { x: maxX * dir, y: 0, r: 4320 * dir, s: 1 },
      ];

      while (true) {
        for (const dir of [1, -1]) {
          const steps = bounceSequence(dir);
          for (const step of steps) {
            await next({
              transform: `translateX(${step.x}px) translateY(${step.y}px) rotate(${step.r}deg) scale(${step.s})`,
              config: { mass: 1, tension: 300, friction: 12 },
            });
            await next({
              transform: `translateX(${step.x}px) translateY(0px) rotate(${step.r + 180 * dir}deg) scale(0.95)`,
              config: { mass: 1, tension: 350, friction: 16 },
            });
            await next({
              transform: `translateX(${step.x}px) translateY(0px) rotate(${step.r + 180 * dir}deg) scale(1)`,
              config: { tension: 400, friction: 12 },
            });
          }
        }
      }
    },
    config: { mass: 1, tension: 300, friction: 12 },
  });

  const videos = [
    { videoSrc: 'fearless-dive.mp4', title: 'Fearless Dive', description: 'Laying Everything on the Line' },
    { videoSrc: 'ally-serve.mp4', title: 'Excellent Serve', description: 'Pinpoint Accuracy on Serve' },
    { videoSrc: 'ally-leadership.mp4', title: 'Leadership', description: 'Demonstrating Leadership Qualities Between Plays' },
    { videoSrc: 'ally-command.mp4', title: 'Maintaining Command', description: 'Command and Strategy with Positivity' },
    { videoSrc: 'ally-ready.mp4', title: 'Always Alert', description: 'Alert and in Position' },
    { videoSrc: 'ally-teammate.mp4', title: 'Commands Respect', description: 'Maintaining Respect and Command of Teammates' },
    { videoSrc: 'ally-calm.mp4', title: 'Calm Under Pressure', description: 'Always Calm and Collected in High Pressure' },
    { videoSrc: 'libero-leadership.mp4', title: 'Libero Leadership', description: 'Vocal and Locked In During Play' },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
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
          <Box key={index} w="300px" h="400px" mb="10px">
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
                  src={video.videoSrc}
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
                  {video.title}
                </Text>
                <Text mt={2} fontSize="lg" fontWeight="bold" color="#734F96" fontFamily="'Roboto', serif">
                  {video.description}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Box w="100%" h="300px" display="flex" justifyContent="center" alignItems="center" bg="transparent" border="none">
        <animated.img
          src="/volleyball-2.png"
          alt="Player Image"
          style={{
            ...volleyballSpring,
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            willChange: 'transform',
          }}
        />
      </Box>
    </VStack>
  );
}

export default VolleyballFilm;
