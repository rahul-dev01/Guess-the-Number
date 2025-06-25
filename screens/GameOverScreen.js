import { StyleSheet, Text, View } from 'react-native'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'

const GameOverScreen = ({ userNumber, setStep, setUserNumber }) => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Title child="Game Over" />
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.congratsText}>Congratulations</Text>
                </View>

                <View>
                    <Text style={styles.winText}>You Win</Text>
                </View>

                <View>
                    <Text style={styles.labelText}>Your Number</Text>
                </View>

                <View>
                    <Text style={styles.numberText}>{userNumber}</Text>
                </View>

                <View style={styles.buttonRow}>
                    <PrimaryButton
                        onPressFunction={() => {
                            setStep(1)
                            setUserNumber(null)
                        }}
                        name="Go TO Home" />
                </View>
            </View>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    congratsText: {
        fontSize: 40,
        fontWeight: '800',
        color: '#4CAF50',
    },
    winText: {
        fontSize: 30,
        fontWeight: '500',
        color: '#388E3C',
    },
    labelText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#555',
    },
    numberText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3F51B5',
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
});
