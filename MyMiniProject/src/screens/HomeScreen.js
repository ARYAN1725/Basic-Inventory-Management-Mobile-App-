import { StyleSheet, Text, View, Pressable } from 'react-native'  
import { useState } from 'react'
import React from 'react'
import AllItems from './AllItems'
// import LowStock from './LowStock'
import Create from './Create'
import Guide from './Guide';

const HomeScreen = () => {

    const [view, setview] = useState(0);
    const [data, setdata] = useState([
        {id: 1, name: 'Wheat', stock: 20, unit: 'kg'},
        {id: 2, name: 'Rice', stock: 50, unit: 'kg'},
        {id: 3, name: 'Sugar', stock: 10, unit: 'kg'},
        {id: 4, name: 'Salt', stock: 17, unit: 'kg'},
        {id: 5, name: 'Oil', stock: 15, unit: 'liters'},
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DashBoard </Text>
        <View style={styles.navigationButtons}>

            <Pressable style={[styles.button, view === 0 ? {backgroundColor: 'green'} : null]} onPress = {() => setview(0)}>
                <Text style={[styles.buttonText, view === 0 ? {color: 'white'} : null]}>All Items</Text>
            </Pressable>

            <Pressable style={[styles.button, view === 1 ? {backgroundColor: 'green'} : null]} onPress = {() => setview(1)}>
                <Text style={[styles.buttonText, view === 1 ? {color: 'white'} : null]}>Low Stock</Text>
            </Pressable>

            <Pressable style={[styles.button, view === 2 ? {backgroundColor: 'green'} : null]} onPress = {() => setview(2)}>
                <Text style={[styles.buttonText, view === 2 ? {color: 'white'} : null]}>Create</Text>
            </Pressable>

            <Pressable style={[styles.button, view === 3 ? {backgroundColor: 'green'} : null]} onPress = {() => setview(3)}>
                <Text style={[styles.buttonText, view === 3 ? {color: 'white'} : null]}>Guide to use the app</Text>
            </Pressable>
        </View>

        {view === 0 && <AllItems data={data}/>}
        {view === 1 && <AllItems data={data.filter(item => item.stock <= 15)}/>}
        {view === 2 && <Create data={data} setdata={setdata} />}
        {view === 3 && <Guide />}
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    navigationButtons: {
        flexDirection: 'row',
        paddingLeft: 5,
        gap: 10
        
    },
    button: {
        borderWidth: 0.85,
        borderColor: 'green',
        borderRadius: 50,
        padding: 5,
        paddingVertical: 7,
    },
    buttonText:{
        color: 'green',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13,
    }
})