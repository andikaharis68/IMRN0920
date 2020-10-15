import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DataTampil from './dataTampil';
import data from './skillData.json';

export default class SkillScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={{ width: 190, height: 50, marginTop: 35, marginLeft: 160, marginBottom: 10 }} />

                <View style={styles.akun}>
                    <View>
                        <FontAwesome5 name={'user-circle'}
                            size={35} solid
                            color="#3EC6FF"
                        />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={styles.teksHai}>Hai,</Text>
                        <Text style={styles.teksNama}>Andika Haris</Text>
                    </View>
                </View>

                <View style={styles.SkillNama}>
                    <Text style={styles.SkillTeks}>SKILL</Text>
                    <View style={styles.bawah}></View>
                </View>

                <View style={styles.kbSkill}>
                    <TouchableOpacity style={styles.bwLib} >
                        <Text style={styles.textbt}>Library / Framework</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bwBa} >
                        <Text style={styles.textbt}>Bahasa Pemrograman</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bwTe} >
                        <Text style={styles.textbt}>Teknologi</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <FlatList
                        data={data.items}
                        renderItem={(video) => <DataTampil video={video.item} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#e5e5e5' }} />}
                    />
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    },
    akun: {
        height: 35,
        flexDirection: 'row',
        marginBottom: 2

    },
    teksNama: {
        fontSize: 18,
        color: '#003366'
    },
    teksHai: {
        fontSize: 14
    },
    SkillNama: {
        marginTop: 25,
    },
    SkillTeks: {
        fontSize: 38,
        color: "#003366"
    },
    bawah: {
        borderTopWidth: 6,
        borderTopColor: '#3EC6FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    kbSkill: {
        flexDirection: 'row',
        marginBottom: 2

    },
    bwLib: {
        backgroundColor: "#B4E9FF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 5,
        width: 121,
    },
    bwBa: {
        backgroundColor: "#B4E9FF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 5,
        width: 130
    },
    bwTe: {
        backgroundColor: "#B4E9FF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 5,
        width: 70
    },
    textbt: {
        color: '#003366',
        textAlign: "center",
        fontSize: 11,
        fontWeight: "bold",
    },


})