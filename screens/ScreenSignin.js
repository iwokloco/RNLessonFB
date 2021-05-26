import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import UserContext from '../context/user.context';
import { FBService } from '../services/auth.service';

export default class ScreenSignin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  async createUserWithEmail(login) {
    FBService.signUp('iwokloco@gmail.com', '123456')
      .then((res) => {
        console.log('signUp success : ', res);
        login(res);
      })
      .catch(this.onLoginFail.bind(this));
  }

  async signInWithEmail(login) {
    const { email, password } = this.state;
    if (email.length && password.length > 5) {
      FBService.signIn(email, password)
        .then((res) => login(res))
        .catch(this.onLoginFail.bind(this));
    }
  }

  onLoginFail(error) {
    console.log(error);
  }

  render() {
    return (
      <View style={[styles.container, { flexDirection: 'column' }]}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2 }}>
          <ScrollView style={styles.container}>
            <View>
              <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => this.setState({ email: text })} value={this.state.email} autoCapitalize="none" />
              <TextInput placeholder="Password" style={styles.input} onChangeText={(text) => this.setState({ password: text })} value={this.state.password} secureTextEntry />
              <UserContext.Consumer>
                {(userContextValue) => {
                  return (
                    <>
                      <Button title="Entrar" onPress={() => this.signInWithEmail(userContextValue.login)} />
                      <Button title="Registrarme" onPress={() => this.createUserWithEmail(userContextValue.login)} />
                    </>
                  );
                }}
              </UserContext.Consumer>
            </View>
            <Text style={{ marginTop: 100 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

{
  /* <Button title="Registrarme" onPress={() => this.createUserWithEmail(userContextValue.login)} />; */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
