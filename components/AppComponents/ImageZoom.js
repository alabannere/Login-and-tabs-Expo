import React from 'react';
import { View, StyleSheet, ScrollView, Modal, Image, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default class ImageZoom extends React.Component {
  constructor(props) {
    super(props);


}
  render() {
    return(
     <Modal visible={this.props.visible}  transparent={true} animationType="fade"  style={styles.container}>

      <View style={styles.content}>

      <View style={styles.header}>
          <TouchableOpacity onPress={this.props.onPressClose } style={{backgroundColor:'black', paddingHorizontal:10, paddingVertical:5}} >

            <Feather
                name={'x'}
                size={19}
                color={'white'}
              />  

          </TouchableOpacity>
      </View>

  <ScrollView horizontal={true}>
    <ScrollView>
    <Image  style={{width:Dimensions.get('window').width + 100, height:Dimensions.get('window').height + 100}} resizeMode="contain" source={{uri: this.props.image}}  />
    </ScrollView>
  </ScrollView>




      </View>
     </Modal>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

  },
  header:{
    position:'absolute',
    right:10,
    top:10,
    zIndex:99999
  }
});


