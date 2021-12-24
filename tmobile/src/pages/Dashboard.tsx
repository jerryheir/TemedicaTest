import React, {useState, useRef} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {useQuery} from 'react-apollo';
import {DRUG_QUERY} from '../queries';
import {Drug} from '../interfaces';
import Input from '../components/Input';
import DrugList from '../components/DrugList';

const Dashboard: React.FC = () => {
  const timeoutID = useRef<NodeJS.Timeout>();
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const {loading, error, data, refetch} = useQuery(DRUG_QUERY, {
    variables: {input},
    fetchPolicy: 'network-only',
  });
  // debounce network calls by 2000 ms
  const debounce = (fn: (args?: any) => void, delay: any) => {
    return (...args: any) => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
      timeoutID.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const searchText = (a: string) => {
    setSearch(a);
    debounce(() => {
      setInput(a);
      refetch({
        input: a,
      });
    }, 2000)();
  };
  const renderItem = ({item}: {item: Drug}) => {
    return <DrugList item={item} />;
  };
  return (
    <View style={styles.dashboardContainer}>
      <Image
        testID="image"
        source={require('../images/logo.png')}
        style={styles.logoImage}
        resizeMode={'contain'}
      />
      <Input
        testID="input"
        value={search}
        onChangeText={searchText}
        onSubmitEditing={() => {}}
      />
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {!loading && !error && (
        <>
          <View style={styles.flatList}>
            <Text style={styles.showingText}>
              {data.drugs && data.drugs.length
                ? `Showing ${data.drugs.length} results`
                : ''}
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentFlatList}
            style={styles.flatList}
            data={data.drugs}
            renderItem={renderItem}
            keyExtractor={(item, i) => i.toString()}
          />
        </>
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 16,
  },
  flatList: {width: '100%'},
  contentFlatList: {paddingBottom: 32},
  showingText: {
    fontSize: 12,
    marginBottom: 11,
  },
  logoImage: {
    height: 100,
    width: 100,
    marginBottom: 24,
  },
});
