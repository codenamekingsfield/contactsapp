import React from 'react';
import {View,FlatList} from 'react-native';
import Contacts from '../components/Contacts';

export default function ContactsScreen() {
    const contacts = [
        {name:'ama hagan',number:'0233470542'},
        {name:'bb dugan',number:'0233470523'},
        {name:'atah badu',number:'0233471526'},
        {name:'mama bomo',number:'0233479516'},
        {name:'gama fabio',number:'0233410446'},
        {name:'pedro mendosa',number:'0504532346'},
        {name:'bb dugan',number:'0233470525'},
        {name:'atah badu',number:'0233471566'},
        {name:'mama bomo',number:'0233479576'},
        
    ]
    return (
        <View>
        <FlatList
            data={contacts}
            renderItem={({ item }) => {
                return <Contacts name={item.name} phone={item.number} />
            }}
            keyExtractor={(item) => item.number}
        />
    </View>
    )
}
