import {Text, View, Button, FlatList, StyleSheet, StatusBar, Image} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import {globalStyles,globalTextStyle } from '../../styles/global'







class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pizzas: false
        }
    }

    componentDidMount() {
        return fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    pizzas: json.products
                })
            })
            .catch((e) => {
                    console.error(e);
                }
            )
    }

    render() {
        let pizzas = this.state.pizzas;
        return(<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={globalTextStyle.h1}> PIZZAS</Text>
            <FlatList
                data={pizzas}
                renderItem={ ({ item }) => (
                    <ListItem item={item} navigation={this.props.navigation} />
                ) }
                keyExtractor={item => item.id}
            />

        </View>)
    }

}

export default HomeScreen;