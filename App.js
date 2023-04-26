import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import KakaoLogin from '@react-native-seoul/kakao-login';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: 로그인 처리 로직 구현
    // DB연동, nodejs
    alert(`당신이 입력한 id: ${Id} pw: ${password}`);
    // 메인페이지로 이동 하게 구현 (일단은)

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={Id}
        onChangeText={(text) => setId(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button title="로그인" onPress={handleLogin} />
      
      <TouchableOpacity style={styles.button} onPress={kakaoLogin}>
      <Icon name="comment" size={20} color="white" />
      <Text style={styles.text}>카카오 간편로그인</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE500',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;

