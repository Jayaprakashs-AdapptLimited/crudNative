import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addItem, updateItem} from '../redux/list/actions';

const ItemScreen = ({dispatch, items}) => {
  const [itemName, setItemName] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const handleAddOrUpdateItem = () => {
    if (itemName.trim() === '') return;

    if (editingItem) {
      dispatch(updateItem({id: editingItem.id, name: itemName}));
      setEditingItem(null);
    } else {
      dispatch(addItem({id: Date.now(), name: itemName}));
    }

    setItemName('');
  };

  const handleEditItem = item => {
    setItemName(item.name);
    setEditingItem(item);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter item name"
        value={itemName}
        onChangeText={text => setItemName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddOrUpdateItem}>
        <Text style={styles.buttonText}>
          {editingItem ? 'UPDATE' : 'ADD NAME'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.nameStyle}>
              {item.name}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditItem(item)}>
                <Text style={styles.buttonText}> EDIT </Text>
              </TouchableOpacity>
                <View style={styles.deleteContainer}> 
                <TouchableOpacity style={styles.deleteButton}>
                  <Text style={styles.buttonText}> DELETE </Text>
                </TouchableOpacity>
                </View>
              </View>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  items: state.items,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom: 10,
  },
  nameStyle: {
    fontSize: 18,
    marginHorizontal: 24,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'skyblue',
    // justifyContent: 'flex-end',
  },
  deleteButton: {
    backgroundColor: 'skyblue',
  },
  deleteContainer: {
    marginHorizontal: 15,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});

export default connect(mapStateToProps)(ItemScreen);
