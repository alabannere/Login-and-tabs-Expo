import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    var item = this.props.item;

    return (
      <TouchableOpacity style={{backgroundColor:Colors.primary}}>
          <View style={styles.child} key={item.key}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <Text style={styles.sectionDescription}>{item.body}</Text>
            </View>
          </View>
      </TouchableOpacity>
    )
}
}


const styles = StyleSheet.create({
  child: {
    marginTop: 10,
    padding:10
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '400',
  },
});