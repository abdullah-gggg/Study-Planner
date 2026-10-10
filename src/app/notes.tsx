import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Notes() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Study Notes & Tips
      </ThemedText>

      <ThemedText style={styles.item}>Stay Consistent</ThemedText>
      <ThemedText style={styles.detail}>
        Study at the same time every day.
      </ThemedText>

      <ThemedText style={styles.item}>Take Short Breaks</ThemedText>
      <ThemedText style={styles.detail}>
        Study for 25 minutes, then take a 5 minute break.
      </ThemedText>

      <ThemedText style={styles.item}>Plan Ahead</ThemedText>
      <ThemedText style={styles.detail}>
        Check the Assignments tab regularly so you never miss a deadline.
      </ThemedText>

      <ThemedText style={styles.item}>Revise Weekly</ThemedText>
      <ThemedText style={styles.detail}>
        Use Friday to revise all subjects covered during the week.
      </ThemedText>
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