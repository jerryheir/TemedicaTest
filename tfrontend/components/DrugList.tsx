import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Drug} from '../interfaces';

const DrugList = ({
  item: {name, diseases, description, released},
}: {
  item: Drug;
}) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.listContainer}
      onPress={() => setShow(!show)}>
      <View style={styles.listTopView}>
        <View>
          <Text style={styles.listDrugName}>{name}</Text>
          <View style={styles.listDiseasesView}>
            {diseases &&
              diseases.length > 0 &&
              diseases.map((item: string, idx: number) => (
                <Text key={idx} style={styles.listDiseasesText}>
                  {item} {diseases.length !== idx + 1 ? ', ' : ''}
                </Text>
              ))}
          </View>
        </View>
        <Text style={styles.listReleasedText}>{released}</Text>
      </View>
      <Text style={styles.listReleasedText}>
        {!show && description && description.length > 57
          ? description.substring(0, 54) + '...'
          : description}
      </Text>
    </TouchableOpacity>
  );
};

export default DrugList;

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 11,
    marginBottom: 11,
    width: '100%',
  },
  listTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 11,
  },
  listDrugName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listDiseasesView: {flexDirection: 'row', flexWrap: 'wrap', maxWidth: 260},
  listDiseasesText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  listReleasedText: {fontSize: 12},
});
