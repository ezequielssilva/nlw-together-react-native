import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image
} from "react-native";

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from './styles';

export function SignIn() {

  const navigation = useNavigation();

  function handlerSignIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>

      <Image
        source={IllustrationImg}
        style={styles.img} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          onPress={handlerSignIn}
        />

      </View>

    </View>
  );
}