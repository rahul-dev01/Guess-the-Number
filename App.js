import { LinearGradient } from 'expo-linear-gradient';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GuessScreen from './screens/GuessScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [Step, setStep] = useState(1)
  const [userNumber, setUserNumber] = useState(null);

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4', '#fad0c4']}
      style={styles.background} >
      <SafeAreaView style={styles.safeArea}>

        {Step == 1 && <StartGameScreen Step={Step} setStep={setStep} userNumber={userNumber} setUserNumber={setUserNumber} />}
        {Step == 2 && <GuessScreen setStep={setStep} userNumber={userNumber} />}
        {Step == 3 && <GameOverScreen userNumber={userNumber} setStep={setStep} setUserNumber={setUserNumber} />}


      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
  },
});
