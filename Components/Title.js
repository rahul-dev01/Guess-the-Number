
import { Text, View ,StyleSheet } from "react-native";


const Title = ({child}) => {
    return (
        <View>
            <Text style={styles.title}>{child}</Text>
        </View>
    )
}
export default Title

const styles = StyleSheet.create({
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
});

