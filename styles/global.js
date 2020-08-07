import { StyleSheet } from 'react-native';

export const globalColors = {
        primary: '#073B4C',
        secondary: '#06D6A0',
        error: '#EF476F',
        warning: '#FFD166',
        caption: '#118AB2',
        white: 'white',
}

export const scores = {
    green: 'green',
    lightgreen: '#85BB2F',
    yellow: '#FFD300',
    orange: 'orange',
    red: 'red',
}
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b4ff',
        padding: 15,
    },
    center: {
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    itemListItemContainer: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemListItemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemListTitle: {
        fontSize: 18,
    },
    itemListRating: {
        fontSize: 12,
        color: '#888',
    },
    item: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1d1d1d',
    },
});
export const globalTextStyle = {
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: globalColors.white,
    },

    h1: {
        fontWeight: 'bold',
        fontSize: 32,
        color: globalColors.primary,
        marginBottom: 5,
    },
    h2: {
        fontSize: 26,
        color: globalColors.primary,
        marginBottom: 5,
    },
    content: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 10,
    },
    subtitle: {
        color: 'gray',
        fontSize: 12,
        marginBottom: 15,
    },

}