import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'
import { useEffect, useState } from 'react';

const GuessScreen = ({ setStep, userNumber }) => {


  console.log(`userNumber --> ${userNumber}`)

  const [minValue, setminValue] = useState(1)
  const [maxValue, setmaxValue] = useState(99)
  const [guess, setguess] = useState(minValue)

  function getRandomNumber() {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }


  useEffect(() => {
    setguess(getRandomNumber());
  }, [minValue, maxValue]);

  return (
    <View >
      <Title child="Opponent's Guess" />
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{guess} </Text>

          <View style={styles.buttonRow}>
            <PrimaryButton
              onPressFunction={() => {
                if (userNumber < guess) {
                  setmaxValue(guess);
                  console.log(`---> lower ${guess}`)
                } else if (userNumber == guess) {
                  setStep(3);
                } else {
                  Alert.alert("Dont lie");
                }
              }}

              name="Lower"  >
            </PrimaryButton>

            <PrimaryButton
              onPressFunction={() => {
                if (userNumber > guess) {
                  setminValue(guess);
                  console.log(`---> higher ${guess}`)
                } else if (userNumber === guess) {
                  setStep(3);
                } else {
                  Alert.alert("Dont lie");
                }
              }}
              name="Higher"  >
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GuessScreen



const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%"
  },

  inputContainer: {
    width: '85%',
    backgroundColor: '#c69d9d',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },

  title: {
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4e9bde',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },




  input: {
    width: '12%',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 24,
    textAlign: 'center',
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

