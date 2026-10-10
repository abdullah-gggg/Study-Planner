import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Study Planner
      </ThemedText>

      <ThemedText style={styles.welcome}>Welcome!</ThemedText>

      <ThemedText style={styles.description}>
        Organize your weekly study schedule, assignments,
        and quizzes in one place.
      </ThemedText>

      <ThemedText style={styles.info}>
        Use the Planner tab to view your weekly study plan.
      </ThemedText>

      <ThemedText style={styles.info}>
        Use the Assignments tab to keep track of upcoming work.
      </ThemedText>

      <ThemedText style={styles.info}>
        Use the Notes tab for study tips.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 25,
  },

  info: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});