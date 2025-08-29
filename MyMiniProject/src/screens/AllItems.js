import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {

  return (
    <View>
        <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Item</Text>
      <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList 
        data = {data}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
            <View style = {[styles.itemContainer, {backgroundColor: item.stock <= 15 ? '#FFCCCC' : '#D7F6BFFF'}]}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.stock}</Text>
            </View>
        )}

        contentContainerStyle = {{gap: 10}}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
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
    }
})