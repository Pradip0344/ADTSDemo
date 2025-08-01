import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';

export default function EventDetails({ route }) {
  const { event } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>{event.name}</Text>
      {event.images && <Image source={{ uri: event.images[0].url }} style={{ height: 200 }} />}
      <Text>{event.dates?.start?.localDate}</Text>
      <Text>{event._embedded?.venues?.[0]?.name}</Text>
      <Button title="Buy Tickets" onPress={() => Linking.openURL(event.url)} />
    </View>
  );
}