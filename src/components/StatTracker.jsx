import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    points: '',
    rebounds: '',
    assists: '',
    steals: '',
    blocks: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      points: '',
      rebounds: '',
      assists: '',
      steals: '',
      blocks: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averagesHS = {
    points: calculateAverages('points'),
    rebounds: calculateAverages('rebounds'),
    assists: calculateAverages('assists'),
    steals: calculateAverages('steals'),
    blocks: calculateAverages('blocks'),
  };

  const averagesTexasHardwork = {
    points: calculateAverages('points'),
    rebounds: calculateAverages('rebounds'),
    assists: calculateAverages('assists'),
    steals: calculateAverages('steals'),
    blocks: calculateAverages('blocks'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif" textAlign="center">
        Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#FFD700"
          borderWidth="4px"
        >
          <Text 
            color="#E6E6FA" 
            fontWeight="bold" 
            fontFamily="'Roboto', serif" 
            fontSize="md"
            textAlign="center" 
          >
            Taft High School Stats
          </Text>
          <Text color="#E6E6FA">Points: {averagesHS.points}</Text>
          <Text color="#E6E6FA">Rebounds: {averagesHS.rebounds}</Text>
          <Text color="#E6E6FA">Assists: {averagesHS.assists}</Text>
          <Text color="#E6E6FA">Steals: {averagesHS.steals}</Text>
          <Text color="#E6E6FA">Blocks: {averagesHS.blocks}</Text>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#FFD700"
          borderWidth="4px"
        >
          <Text 
            color="#E6E6FA" 
            fontWeight="bold" 
            fontFamily="'Roboto', serif"  
            fontSize="md"
            textAlign="center" 
          >
            San Antonio Elite Stats
          </Text>
          <Text color="#E6E6FA">Points: {averagesTexasHardwork.points}</Text>
          <Text color="#E6E6FA">Rebounds: {averagesTexasHardwork.rebounds}</Text>
          <Text color="#E6E6FA">Assists: {averagesTexasHardwork.assists}</Text>
          <Text color="#E6E6FA">Steals: {averagesTexasHardwork.steals}</Text>
          <Text color="#E6E6FA">Blocks: {averagesTexasHardwork.blocks}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#F8F8FF"
        borderRadius="12px"
        borderColor="#FFD700"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Bungee', serif" mb={4}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px" borderColor="#FFD700">
                <Text color="#000000" fontWeight="bold" fontFamily="'Bungee', serif">
                  Game {index + 1} - Ally Rosa:
                </Text>
                <Text color="#000000">Team: {game.team}</Text>
                <Text color="#000000">Opponent: {game.opponent}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Points: {game.points}</Text>
                <Text color="#000000">Rebounds: {game.rebounds}</Text>
                <Text color="#000000">Assists: {game.assists}</Text>
                <Text color="#000000">Steals: {game.steals}</Text>
                <Text color="#000000">Blocks: {game.blocks}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#FFD700"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Team
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Date
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Points
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={stats.points}
              name="points"
              onChange={handleInputChange}
              placeholder="Enter points scored"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Rebounds
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={stats.rebounds}
              name="rebounds"
              onChange={handleInputChange}
              placeholder="Enter number of rebounds"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Assists
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={stats.assists}
              name="assists"
              onChange={handleInputChange}
              placeholder="Enter number of assists"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Steals
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={stats.steals}
              name="steals"
              onChange={handleInputChange}
              placeholder="Enter number of steals"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#E6E6FA" fontFamily="'Bungee', serif" fontSize="lg">
              Blocks
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FFD700"
              value={stats.blocks}
              name="blocks"
              onChange={handleInputChange}
              placeholder="Enter number of blocks"
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#FFD700"
            color=" #000000"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Bungee', serif"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#FFD700"
            borderWidth="3px"
            _hover={{ borderColor: '#E6E6FA' }}
            onClick={handleAddGame}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
