import { StyleSheet, View, Text } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
  },
  goalText: {
    color: '#068FFF',
    textAlign: 'center',
    fontWeight: '500',
  },
});
