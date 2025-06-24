import { StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import Title from '../Components/Title';

const StartGameScreen = ({Step, setStep, userNumber, setUserNumber}) => {
  return (
    <View >
      <Title child="Guess the Number" />
      <View style={styles.screen}>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            maxLength={2}
            placeholderTextColor="red"
            keyboardType="number-pad"
            onChangeText={(text) => setUserNumber(Number(text))}
          />

          <View style={styles.buttonRow}>
            <PrimaryButton
              onPressFunction={() => {
               setUserNumber(null)
              }}
              name="Reset" />
            <PrimaryButton
              onPressFunction={() => {
              
                if (userNumber == null) {
                  return;
                } else {
                  setStep(2);
                }
              }}
              name="Confirm" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

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

