import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        padding: 5,
        marginTop: 20,
    }
}

export default Header