import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal,Keyboard,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from './../styles/global';
import Card from './../shared/card';
import ReviewForm from './reviewForm';

export default function Home(props) {
    const navigation = props.navigation
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];

        })
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container} >
            <Modal style={styles.modelContent} visible={modalOpen} animationType='slide'>

                <Icon
                    style={{ ...styles.modelToggle, ...styles.modelClose }}
                    name='close'
                    size={24}
                    onPress={() => setModalOpen(false)}
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modelContent}>
                        <Text >Hello from modal</Text>
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>


            </Modal>

            <Icon style={styles.modelToggle} name='add' size={24} onPress={() => setModalOpen(true)} />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card><Text style={globalStyles.titleText}>{item.title}</Text></Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    modelToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modelClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modelContent: {
        flex: 1,
    }
})

