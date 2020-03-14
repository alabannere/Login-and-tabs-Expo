import React from 'react';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);

}
  render() {
    return(
     <Modal visible={this.props.isLoading}  transparent={true} animationType="fade"  style={styles.container}>
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
      </View>
     </Modal>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    //backgroundColor:'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


