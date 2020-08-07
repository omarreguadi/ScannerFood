import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { Camera } from 'expo-camera';

class ScanScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hasPermission: null,
            hasScanned: false,
            barCodeData: {},
            productData: {},
            history: [],
            loading: false,

        }
    }

    async componentDidMount(){
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({
            hasPermission: status === 'granted'
        })

        this._focusListener = this.props.navigation.addListener('focus', () => {
            this.setState({ isFocused: true });
        });

        this._blurListener = this.props.navigation.addListener('blur', () => {
            this.setState({ isFocused: false });
        });

    }
    componentWillUnmount() {
        if (this._focusListener) {
            this._focusListener();
            this._focusListener = null;
        }

        if (this._blurListener) {
            this._blurListener();
            this._blurListener = null;
        }
    }
    handleBarcode = ({ type, data }) => {
        this.setState({
            hasScanned: true
        })
        Vibration.vibrate()
        //fetch avec l'id
        fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
            .then((response) => response.json())
            .then((json) => {
                //nav
                this.props.navigation.navigate('Product',
                    {
                        item: json.product
                    })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        const { isFocused } = this.state;
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <View><Text style={{  padding:40}}>No access to camera</Text></View>;
        }
        else if (isFocused)
        {
        return (
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={this.state.hasScanned? undefined : this.handleBarcode}>
                </Camera>
            </View>
        );}
        return null;
    }
}
export default ScanScreen;