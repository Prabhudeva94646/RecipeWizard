import React from 'react';
import styles from'./Styles';

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground,
    BackHandler,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import {
  List,
  ListItem,
  Icon,
  Header,
} from 'react-native-elements';

import { createStackNavigator } from 'react-navigation';
import Dairy from '../Dairy/Dairy';
import Meats from '../Meats/Meats';
import Baking from '../Baking/Baking';
import Sweeteners from '../Sweeteners/Sweeteners';
import Vegetables from '../Vegetables/Vegetables';
import Fruits from '../Fruits/Fruits';
import HeaderBar from '../HeaderBar/HeaderBar';
import All from './All';

const list = [
  {
    name: 'Dairy',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Dairy.png',
    selectedIndex: 1,
    key:1,
  },
  {
    name: 'Vegetables',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Vegetables.png',
    selectedIndex: 2,
    key:2,
    
  },
  {
    name: 'Fruits',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Fruits.png',
    selectedIndex: 3,
    key:3,

  },
  {
    name: 'Baking & Grains',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Baking%20&%20Grains.png',
    selectedIndex: 4,
    key:4,
  },
  {
    name: 'Condiments',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Spices.png',
    selectedIndex: 5,
    key:5,

  },
  {
    name: 'Meats',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Meats.png',
    selectedIndex: 6,
    key:6,
  },
  {
    name: 'Seafoods',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Seafood.png',
    selectedIndex: 7,
    key:7,
  },
  {
    name: 'Liquids',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Alcohol.png',
    selectedIndex: 8,
    key:8,

  },
  {
    name: 'Nuts',
    avatar_url: 'https://s3.amazonaws.com/recipe-icons/Nuts.png',
    selectedIndex: 9,
    key:9,

  }
]

export default class IngredientList extends React.Component {

  add (value) {
        this.props.change(value);
  }
  del (value) {
        this.props.remove(value);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  handleUpdateIndex (selected, names) {
    this.setState({selectedIndex : selected})
    this.setState({name : names})
  }

  revertUpdateIndex (selectedIndex) {
    this.setState({selectedIndex : 0})
    this.setState({name : 'Add Ingredients'})
  }

  stopUpdateIndex (category) {

    if (category === 'Baking & Grains'){
      category = 'Baking'
    }
    if (category === 'Condiments'){
      category = 'Sweeteners'
    }

    this.props.navigation.navigate(category,
      {
        adds: this.add.bind(this),
        dels: this.del.bind(this)
      })
  }

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      name: 'Add Ingredients'
    }
    this.handleUpdateIndex = this.handleUpdateIndex.bind(this)
    this.revertUpdateIndex = this.revertUpdateIndex.bind(this)
  }

  render () {

    const { selectedIndex } = this.state
    return(
      <View containerStyle = {{backgroundColor: '#FFF'}}>
      <ScrollView containerStyle = {{backgroundColor: '#FFF'}}>
        <View>

        <ScrollView>
        <List containerStyle = {{
          flex: 1,
          marginTop: 0,
          borderTopWidth: 0,
          }}>
          {list.map((l) => (
            <TouchableOpacity>
            <ListItem containerStyle = {{ height: 80, paddingTop: 15, borderTopWidth:0, borderBottomWidth: 0.25}}
              key = {l.key}
              avatar={
                <View>
                  <ImageBackground
                    style={{width: 60, height: 60}}
                    source={{uri: l.avatar_url}}
                  />
                </View>
              }
              title={l.name}
              onPress={() => this.stopUpdateIndex(l.name)}
            />
            </TouchableOpacity>
          ))
        }
        </List>
        </ScrollView>
        </View>
      </ScrollView>
      </View>
    )
  }
}
