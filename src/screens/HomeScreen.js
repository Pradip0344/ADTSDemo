import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { searchEvents } from '../services/ticketmaster';

export default function HomeScreen({ navigation }) {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const result = await searchEvents(keyword, city);
    setEvents(result);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Keyword" value={keyword} onChangeText={setKeyword} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} />
      <Button title="Search Events" onPress={fetchEvents} />

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate('Details', { event: item })}>{item.name}</Text>
        )}
      />
    </View>
  );
}