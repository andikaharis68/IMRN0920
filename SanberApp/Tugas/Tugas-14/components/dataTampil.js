import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class dataTampil extends React.Component {
    render(){

        let video = this.props.video;

        return (
            <View>
                <TouchableOpacity style={styles.skill}>
                    <View style={styles.kotakSkill}>
                        <View style={styles.iconSkill}>
                            <MaterialCommunityIcons name={video.iconName} size={85} solid color="#003366" />
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 10}}>
                            <View>
                                <Text style={styles.namaSkill}>{video.skillName}</Text>
                            </View>
                            <View>
                                <Text style={styles.namaKeterangan}>{video.categoryName}</Text> 
                            </View>
                            <View>
                                <Text style={styles.namaPersen}>{video.percentageProgress}</Text>
                            </View>
                        </View>
                        <View style={styles.iconAkhir}>
                            <MaterialCommunityIcons name={'chevron-right'} size={100} solid color="#003366" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    skill: {
        backgroundColor: "#B4E9FF",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        marginTop:10,
        marginRight:5,
        width: 330,
        height: 130,
    },
    iconSkill: {
        marginTop: 6,
    },
    kotakSkill: {
        height: 35,
        flexDirection: 'row',
        marginBottom:2
    },
    namaSkill: {
        color: '#003366',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 80,
    },
    namaKeterangan: {
        color: '#3EC6FF',
        fontSize: 14,
        fontWeight: "700"
    },
    namaPersen: {
        color: "white",
        fontSize: 48,
        fontWeight: "700",
        marginLeft: 20,
        textAlign: "right"
    },
    iconAkhir: {
        marginTop: 6,
        marginLeft: -10,
    },
})