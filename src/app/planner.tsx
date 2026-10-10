import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Planner() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Study Planner
      </ThemedText>

      <ThemedText style={styles.subtitle}>My Weekly Study Plan</ThemedText>

      <ThemedText style={styles.day}>Monday</ThemedText>
      <ThemedText style={styles.subject}>Mobile Application Development</ThemedText>

      <ThemedText style={styles.day}>Tuesday</ThemedText>
      <ThemedText style={styles.subject}>Web Technologies</ThemedText>

      <ThemedText style={styles.day}>Wednesday</ThemedText>
      <ThemedText style={styles.subject}>Database Systems</ThemedText>

      <ThemedText style={styles.day}>Thursday</ThemedText>
      <ThemedText style={styles.subject}>Programming</ThemedText>

      <ThemedText style={styles.day}>Friday</ThemedText>
      <ThemedText style={styles.subject}>Revision & Assignment Work</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  day: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },

  subject: {
    fontSize: 16,
    marginTop: 4,
  },
});