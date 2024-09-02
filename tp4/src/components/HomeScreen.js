import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Card, Text, Appbar } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();
  
  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://ant-clear-secretly.ngrok-free.app/api/event');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogout = () => {
    // Aquí podrías limpiar cualquier estado relacionado con la sesión
    navigation.navigate('LoginScreen');  // Asumiendo que tienes una pantalla de login
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Inicio" />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar.Header>
      <ScrollView>
        {events.length > 0 ? (
          events.map((event) => (
            <Card key={event.id} style={{ margin: 10 }}>
              <Card.Title title={event.name} />
              <Card.Content>
                <Text>{event.description}</Text>
                <Text>{event.date}</Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text>No hay eventos disponibles</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Homescreen;
