import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button, IconButton } from 'react-native-paper';

const HomeScreen = ({ route, navigation }) => {
  const { token } = route.params;

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Bienvenido"
          subtitle="Has iniciado sesión exitosamente"
          left={(props) => <IconButton {...props} icon="home" />}
        />
        <Card.Content>
          <Text style={styles.text}>Tu Token de Autenticación:</Text>
          <Text style={styles.token}>{token}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleLogout} style={styles.logoutButton} mode="contained">
            Cerrar Sesión
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  token: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
  },
});

export default HomeScreen;
