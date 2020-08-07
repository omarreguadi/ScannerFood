import {Text, View, Image, StyleSheet, StatusBar , ScrollView} from "react-native";
import React from "react";
import { globalStyles,globalTextStyle } from '../../styles/global'
import { getColorScore,getColorLevel } from '../../function/product'




const styles = StyleSheet.create({

    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    productInfoContainer : {
        flex: 1,
        padding: 50,
    },
});

const ProductScreen = ({route}) => (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.productInfoContainer} >
        <Text style={globalTextStyle.h2}>Product {route.params.item.product_name_fr}</Text>
        <Text style={globalTextStyle.h2}>{route.params.item.brands_tags}</Text>
        <Text style={[globalStyles.content,
            {color: getColorScore(route.params.item.nutriscore_grade)}]}>
            La nutriScore est de {route.params.item.rev}/100
        </Text>
        <Image
            style={styles.stretch}
            source={{
                uri: route.params.item.image_thumb_url,
            }}
        />
            <Text style={globalTextStyle.h2}>Catégories: </Text>
            <Text> {route.params.item.categories}</Text>

          <Text style={globalTextStyle.h2}>Nutriment Niveau</Text>
            <View style={styles.nutrimentsContainer}>
            <Text style={[globalTextStyle.content,
                {color: getColorLevel(route.params.item.nutrient_levels.fat)}]}>
                Gras {'\n'}
                {route.params.item.nutrient_levels.fat}
            </Text>

            <Text style={[globalTextStyle.content,
                {color: getColorLevel(route.params.item.nutrient_levels.salt)}]}>
                Sel {'\n'}
                {route.params.item.nutrient_levels.salt}
            </Text>

            <Text style={[globalTextStyle.content,
                {color: getColorLevel(route.params.item.nutrient_levels['saturated-fat'])}]}>

                gras saturé {'\n'}
                {route.params.item.nutrient_levels['saturated-fat']}
            </Text>

            <Text style={[globalTextStyle.content,
                {color: getColorLevel(route.params.item.nutrient_levels.sugars)}]}>
                Sucre {'\n'}
                {route.params.item.nutrient_levels.sugars}
            </Text>
            </View>
            <View style={styles.separator}/>

            <Text style={globalTextStyle.h2}>Allergènes</Text>
            <Text style={globalTextStyle.content}>  {route.params.item.allergens} </Text>

            <Text style={globalTextStyle.h2}>Ingredients</Text>
            <Text style={globalTextStyle.content}>  {route.params.item.ingredients_text_debug} </Text>

            <View style={styles.separator}/>
        </ScrollView>

    </View>
);

export default ProductScreen;