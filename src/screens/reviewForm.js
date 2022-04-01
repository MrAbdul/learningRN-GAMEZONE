import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup'
import { globalStyles } from './../styles/global';
import FlatButton from './../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0
        })
})
export default function ReviewForm(props) {
    const { addReview } = props

    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema={reviewSchema}
                initialValues={{ title: '', body: '', rating: '' }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values, actions) => {
                    console.log(values)
                    addReview(values)
                    actions.resetForm()
                }}
            >
                {(formProps) => (
                    <View >
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={formProps.handleChange('title')}
                            value={formProps.values.title}
                            onBlur={formProps.handleBlur('title')}
                            
                        />
                        <Text style={globalStyles.errorText}>{formProps.touched.title&&formProps.errors.title}</Text>

                        <TextInput
                            style={{...globalStyles.input,...{minHeight:90}}}
                            multiline={true} 
                            placeholder='Review body'
                            
                            onChangeText={formProps.handleChange('body')}
                            value={formProps.values.body}
                            onBlur={formProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{formProps.touched.body&&formProps.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formProps.handleChange('rating')}
                            value={formProps.values.rating}
                            keyboardType='number-pad'
                            onBlur={formProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{formProps.touched.rating&&formProps.errors.rating}</Text>

                        <FlatButton text='submit' onPress={formProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}