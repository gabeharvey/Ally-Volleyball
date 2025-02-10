import { useState } from 'react';
import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const AthleteProgression = () => {
  const [measurables, setMeasurables] = useState({
    verticalJump: '',
    speed: '',
    shootingAccuracy: '',
    endurance: '',
    agility: '',
    date: '',
  });
  const [progression, setProgression] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurables({ ...measurables, [name]: value });
  };

  const handleAddProgression = () => {
    setProgression([...progression, measurables]);
    setMeasurables({
      verticalJump: '',
      speed: '',
      shootingAccuracy: '',
      endurance: '',
      agility: '',
      date: '',
    });
  };

  const generateChartData = (key) => {
    return {
      labels: progression.map((entry) => entry.date),
      datasets: [
        {
          label: key.charAt(0).toUpperCase() + key.slice(1),
          data: progression.map((entry) => parseFloat(entry[key])),
          borderColor: '#E6E6FA', 
          backgroundColor: 'rgba(255, 69, 0, 0.3)',
          borderWidth: 3, 
          pointRadius: 6, 
          pointBackgroundColor: '#FAF0E6', 
          pointBorderColor: '#E6E6FA', 
          pointBorderWidth: 2, 
          tension: 0.4, 
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true, 
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#FAF0E6', 
          font: {
            size: 14,
            family: "'Bungee', serif",
          },
        },
      },
      title: {
        display: true,
        text: 'Athlete Progression',
        color: '#FAF0E6',
        font: {
          size: 18,
          family: "'Bungee', serif",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(250, 240, 230, 0.2)',
        },
        ticks: {
          color: '#FAF0E6',
          font: {
            size: 12,
            family: "'Bungee', serif",
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(250, 240, 230, 0.2)',
        },
        ticks: {
          color: '#FAF0E6',
          font: {
            size: 12,
            family: "'Bungee', serif",
          },
        },
      },
    },
  };

  return (
<Box
  p={{ base: 4, md: 8 }}
  w={{ base: '90%', md: '600px' }}
  bgColor="#E6E6FA"
  borderRadius="md"
  maxW="1200px"
  mx="auto"
  border="3px solid"
  borderColor="#FFD700" 
>

      <Heading
        color="#734F96"
        fontFamily="'Bungee', serif"
        mb={4}
        align="center"
        fontSize="4xl"
        fontWeight="medium"
      >
        Athlete Progression Tracker
      </Heading>
      <Box
        border="4px solid #FFD700"
        borderRadius="lg"
        p={6}
        bgColor="#E6E6FA"
        mb={8}
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
      >
        <Grid gap={4} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
          <FormControl>
            <FormLabel color="#734F96">Vertical Jump (inches)</FormLabel>
            <Input
              type="number"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#FFD700"
              value={measurables.verticalJump}
              name="verticalJump"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#734F96">Speed (seconds for 40m)</FormLabel>
            <Input
              type="number"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#E6E6FA"
              value={measurables.speed}
              name="speed"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#734F96">Shooting Accuracy (%)</FormLabel>
            <Input
              type="number"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#E6E6FA"
              value={measurables.shootingAccuracy}
              name="shootingAccuracy"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#734F96">Endurance (minutes)</FormLabel>
            <Input
              type="number"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#E6E6FA"
              value={measurables.endurance}
              name="endurance"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#734F96">Agility (cone drill seconds)</FormLabel>
            <Input
              type="number"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#E6E6FA"
              value={measurables.agility}
              name="agility"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#734F96">Date</FormLabel>
            <Input
              type="date"
              bgColor="#FAF0E6"
              color="#38393D"
              borderColor="#E6E6FA"
              value={measurables.date}
              name="date"
              onChange={handleInputChange}
            />
          </FormControl>
        </Grid>
        <Button
            mt={4}
            bgColor="#E6E6FA"
            color=" #734F96"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Bungee', serif"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#734F96"
            borderWidth="3px"
            _hover={{ borderColor: '#734F96' }}
          onClick={handleAddProgression}
        >
          Add Progression
        </Button>
      </Box>
      <Box mt={6}>
        <Heading
          size="lg"
          color="#734F96"
          fontFamily="'Bungee', serif"
          mb={4}
          align="center"
        >
          Progression History
        </Heading>
        {progression.length === 0 ? (
          <Text color="#734F96" align="center">
            No progression data added yet.
          </Text>
        ) : (
          <>
            {['verticalJump', 'speed', 'shootingAccuracy', 'endurance', 'agility'].map(
              (key) => (
                <Box key={key} mb={8}>
                  <Heading size="sm" color="#734F96" mb={2}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Heading>
                  <Line data={generateChartData(key)} options={chartOptions} />
                </Box>
              )
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AthleteProgression;
