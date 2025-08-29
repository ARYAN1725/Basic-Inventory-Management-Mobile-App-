import { StyleSheet, Text, View, TextInput, Pressable, FlatList, marginTop } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Create = ({ data, setdata }) => {

  const [itemName, setitemName] = useState('');
  const [itemStock, setitemStock] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemid, seteditItemid] = useState(null);
  // const [itemStockAmount, setitemStockAmount] = useState('');

  const addItemHandler = () => {
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      stock: itemStock,
      // unit: itemStockAmount,
    }
    setdata([...data, newItem]);
    setitemName('');
    setitemStock('');
    // setitemStockAmount('');
    setisEdit(false);
  }

  const deleteItemHandler = (id) => {
    setdata(data.filter(item => item.id !== id));
  }

  const editItemHandler = (item) => {
    setitemName(item.name);
    setisEdit(true);
    seteditItemid(item.id);
  }

  const updateItemHandler = () => {
    setdata(data.map((item) => (
      item.id === editItemid ? { ...item, name: itemName, stock: itemStock } : item
    )));
    
    // reset states after editing
    setitemName('');
    setitemStock('');
    setisEdit(false);
    seteditItemid(null);
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item to add...'
        style={styles.textInput}
        value={itemName}
        onChangeText={(text) => setitemName(text)}
      />

      <TextInput
        placeholder='Enter the quantity to add...'
        style={styles.textInput}
        value={itemStock}
        onChangeText={(text) => setitemStock(text)}
      />

      {/* <TextInput
        placeholder='Enter the stock amount...'
        style={styles.textInput}
        value={itemStockAmount}
        onChangeText={(text) => setitemStockAmount(text)}
      /> */}

      <Pressable style={styles.button} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.buttonText}> {isEdit ? 'EDIT ITEM' : 'ADD THE ITEM' }</Text>
      </Pressable>

      <View>
        <Text style={[styles.itemHeading]}>All items in the stock</Text>
        <View style={styles.headingContainer}>

          <Text style={styles.headingText}>Item</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock <= 15 ? '#FFCCCC' : '#D7F6BFFF' }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 10}}>
              <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
  
          )}

          contentContainerStyle={{ gap: 10 }}
        />
      </View>

    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    marginTop: 15,
  },
  textInput: {
    borderWidth: 1,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingVertical: 10,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'normal',
    fontSize: 12,
  },
  itemHeading: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },

})