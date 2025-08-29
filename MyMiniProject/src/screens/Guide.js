import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Guide = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
      <Text style={styles.headingText}> User Guide</Text>
      </View>

      <View>
        <Text style={{marginLeft: 7, marginRight: 7, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Welcome to the User Guide! Here you will find instructions on how to use the app.</Text>
      </View>

        <View>
        <Text style={styles.instructionsText}>1. To view all items, click on 'All Items'.</Text>
        <Text style={styles.instructionsExplaination}> Here, you can view all the items in your inventory. The items below the quantity of 15 will be displayed in red and those above 15 will be displayed in green. </Text>
        </View>

        <View>
        <Text style={styles.instructionsText}>2. To check low stock items, click on 'Low Stock'.</Text>
        <Text style={styles.instructionsExplaination}>In this section, all the items with quantity levels below 15 will be displayed. You can prevent the risk of understocking. </Text>
        </View>

        <View>
        <Text style={styles.instructionsText}>3. To add new items, click on 'Create'.</Text>
        <Text style={styles.instructionsExplaination}>In this section, you can add new items to your inventory. Make sure to fill in all required fields. You can also edit previously added items and their respective quantities as well. You can delete any unwanted item. </Text>
        </View>

        <View style={styles.headingContainer}>
            <Text style={styles.headingText}> Thank you for using our application! Happy Business :-) </Text>
        </View>
      
    </View>
  )
}

export default Guide

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        margin: 15,
        borderColor: 'lightgrey',
        backgroundColor: '#f5f5f5',
        paddingBottom: 10
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    instructionsText: {
        marginTop: 10,
        fontSize: 16,
        marginLeft: 10,
        textAlign: 'justify',
        fontWeight: '410',
    },
    instructionsExplaination: {
        fontSize: 13.5,
        textAlign: 'justify',
        margin: 10,
    }
})