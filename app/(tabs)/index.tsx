import { Image, StyleSheet, Platform, View, SafeAreaView } from 'react-native';
import HomnePage from '@/components/homepage/home';
import FirstPage from '@/components/homepage/first-page';
import HomePage from '@/components/homepage/home';
import { useUser } from '@clerk/clerk-expo';

export default function HomeScreen() {
  const { user } = useUser();
  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {!user ? <FirstPage /> : <HomePage />}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
