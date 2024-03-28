import Colors from '@shared/Theme/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop: 10,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.Base.Primary.White,
    padding: 10,
    gap: 8,
    flex: 0.8,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '500',
  },
  countContainer: {
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Base.Primary.Light,
  },
  content: {
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  headerNote: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    gap: 8,
  },
  container: {
    marginBottom: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
  },
  taskContainer: {
    marginBottom: 20,
    backgroundColor: Colors.Base.Primary.Light,
    borderRadius: 10,
  },
  sectionContainer: {
    backgroundColor: Colors.Base.Primary.White,
    marginBottom: 14,
  },
  testTripsContainer: {
    padding: 10,
    marginTop: 10,
  },
  testTripsContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  testTrip: {
    backgroundColor: Colors.Base.Primary.Light,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  emptyScrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    color: Colors.Base.Primary.Normal,
    fontSize: 18,
    textAlign: 'center',
  },
  cardHeaderText: {
    textAlign: 'left',
    flex: 1,
  },
});

export default styles;
