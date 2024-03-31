import Colors from '@shared/Theme/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    marginTop: 40,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
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
  selectedFilter: {
    backgroundColor: '#007bff',
    color: '#ffffff',
  },
  childFilterContainer: {
    paddingLeft: 20,
  },
});

export default styles;
