import { Button, Icon, Text, ListItem } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'

export default function About() {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>About Page</Text>
            <Text>This is to learn Ethiopian Languages </Text>

            <Button
                buttonStyle={{ width: 150 }}
                containerStyle={{ margin: 5 }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                }}
                disabledTitleStyle={{ color: "#00F" }}
                icon={
                    <Icon name="translate" size={15} color="#0FF" />
                }
                iconContainerStyle={{ background: "#000" }}
                loadingProps={{ animating: true }}
                onPress={() => alert("click")}
                title="Learn"
                titleStyle={{ marginHorizontal: 5 }}
            />
            <Text h1>Students</Text>
            <ListItem>
                <Icon name='person' />
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
                <Icon name='arrow-forward' />
            </ListItem>

        </View>
    )
}
