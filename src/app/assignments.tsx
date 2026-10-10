import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Assignments() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Assignments & Quizzes
      </ThemedText>

      <ThemedText style={styles.item}>MAD Assignment</ThemedText>
      <ThemedText style={styles.detail}>Due: 5 October</ThemedText>

      <ThemedText style={styles.item}>Web Technologies Assignment</ThemedText>
      <ThemedText style={styles.detail}>Due: 8 October</ThemedText>

      <ThemedText style={styles.item}>Database Quiz</ThemedText>
      <ThemedText style={styles.detail}>Due: 10 October</ThemedText>

      <ThemedText style={styles.item}>Programming Assignment</ThemedText>
      <ThemedText style={styles.detail}>Due: 12 October</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  title: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },

  detail: {
    fontSize: 15,
    marginTop: 5,
  },
});