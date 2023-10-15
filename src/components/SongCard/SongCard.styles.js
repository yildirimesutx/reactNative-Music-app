import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection : 'row'
    },
    image : {
        width:100,
        height:100,
        borderRadius:50
    },
    inner_container: {
        marginLeft: 10,
        padding:10,
        flex: 1
    },
    title : {
        fontSize:20,
        fontWeight:'bold'

    },
    info_container : {
        flexDirection : 'row',
    },
    year : {
        marginLeft:10,
        color :'gray'
    },
    soldout_container :{
        borderWidth :1,
        borderColor : 'red'
    },
    soldout_title : {
        color : 'red',
        fontSize : 12,
       
    },
    content_container: {
        flexDirection:'row',
        justifyContent : "space-between",
        marginTop: 5
    }


})