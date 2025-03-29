import {
  LegendList,
  LegendListRef,
  LegendListRenderItemProps,
} from '@legendapp/list';
import {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  const dummyData = Array.from({length: 100}, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    value: Math.floor(Math.random() * 1000),
    isActive: Math.random() > 0.5,
    height: Math.floor(Math.random() * 200) + 50, // Random height between 50 and 250
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000),
    ).toISOString(),
  }));

  const renderItem = (props: LegendListRenderItemProps<any>) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: 'darkred',
          height: props.item.height,
          borderWidth: 1,
        }}>
        <Text>{props.item.name}</Text>
      </View>
    );
  };

  const listRef = useRef<LegendListRef>(null);

  useEffect(() => {
    setTimeout(() => {
      listRef.current?.scrollToIndex({
        index: 80,
        animated: true,
      });
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'gray'}}>
      <LegendList
        ref={listRef}
        data={dummyData}
        maintainVisibleContentPosition
        renderItem={renderItem}
        estimatedItemSize={25}
      />
    </View>
  );
};

export default App;
