import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Constants } from 'expo';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("please! email?")
      .email("well that's not an email"),
    password: Yup.string()
      .required()
      .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
      .min(4, "pretty sure this will be hacked")
});

export default class LoginScreen extends React.Component<{ navigation }> {
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={styles.loginImage} />
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, formikActions) => {
                        this.props.navigation.navigate('Home', values);
                        formikActions.setSubmitting(false);
                        formikActions.resetForm();
                      }}
                >
                    {props => (
                        <View>
                            <TextInput
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                                style={styles.input}
                                placeholder="Email"
                            />
                            {props.touched.email && props.errors.email ? (
                                <Text style={styles.error}>{props.errors.email}</Text>
                            ) : null}
                            <TextInput
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder="Password"
                            />
                            {props.touched.password && props.errors.password ? (
                                <Text style={styles.error}>{props.errors.password}</Text>
                            ) : null}
                            <Button
                                onPress={props.handleSubmit}
                                color="black"
                                mode="contained"
                                loading={props.isSubmitting}
                                disabled={props.isSubmitting}
                                style={{ marginTop: 16 }}>
                                Login
                            </Button>
                        </View>
                    )}
                </Formik>
            </View>
        );
    }

    public handleSubmit(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    error: {
        margin: 8,
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        paddingHorizontal: 8,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    loginImage: {
        width: 200,
        height: 100,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 80,
        marginBottom: 20
    }
});
