import React,{useState, useEffect} from "react";

import  {
View,
Text,
StyleSheet,
FlatList,
TextInput,
Pressable
}  from 'react-native'

import {useNavigation} from '@react-navigation/core'
import dummycontact from "../../../assets/data/contact.json"


const ContactsScreen = ()=>{
    const [searchTerm, setSearchTerm]=useState('');
    const [filteredContacts,setfilterContacts]=useState(dummycontact)

    const navigation = useNavigation();

    useEffect(()=>{
        const newContacts= dummycontact.filter(contact=>
            contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()));
            setfilterContacts(newContacts);
    },[searchTerm])

    const callUser = (user)=>{
        navigation.navigate('CallingScreen', { user })
    };

    return(
        <View style={styles.page}>
            <TextInput
            values={searchTerm}
            onChangeText={setSearchTerm}
            style={styles.searchInput}
            placeholder="search..."/>
        <FlatList
        data={filteredContacts}
        renderItem={({item})=>(
            <Pressable 
            onPress={()=>callUser(item)}
            >
                <Text style={styles.contactName}>{item.user_display_name} </Text>
            </Pressable>
        )}
            ItemSeparatorComponent={()=><View  style={styles.separator} /> }
        />
        </View>

    )
}


const styles = StyleSheet.create({
    searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    },
    page:{
        padding:15,
        backgroundColor:'white',
        flex:1
    },
    contactName:{
        fontSize:16,
        marginVertical:8,
    },
    separator:{
        width:'100%',
        height:1,
        backgroundColor:'#f0f0f0'
    }
});

export default ContactsScreen;