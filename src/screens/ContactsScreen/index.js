import React,{useState, useEffect} from "react";

import  {
View,
Text,
StyleSheet,
FlatList,
TextInput
}  from 'react-native'

import dummycontact from "../../../assets/data/contact.json"


const ContactsScreen = ()=>{
    const [searchTerm, setSearchTerm]=useState('');
    const [filteredContacts,setfilterContacts]=useState(dummycontact)

    useEffect(()=>{
        const newContacts= dummycontact.filter(contact=>
            contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()));
            setfilterContacts(newContacts);
    },[searchTerm])
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
        <Text style={styles.contactName}>{item.user_display_name} </Text>
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