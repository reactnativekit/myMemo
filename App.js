import React, { useMemo, useState } from 'react';
import { View, Text, Button } from "react-native";

function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const App = () => {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
     
      console.log('calculate', counter);
      return factorial(counter);
  }, [counter]);
  console.log('render', { counter });

  return (
    <View  style={{flex:1, justifyContent:"center", backgroundColor:"#E9D5DA"}}>
      <Text style={{fontSize:26, textAlign:"center"}}>FACTORIAL APP {'\n'}</Text>
      <Text style={{fontSize:20, textAlign:"center"}}>Factorial of {counter} is: {result} {'\n'}</Text>
      
        <Button color="#4D4C7D" title="MINUS" onPress={() => setCounter(counter - 1)}/>
        <Button color="#827397" title="PLUS" onPress={() => setCounter(counter + 1)}/>
    
    </View>
  );
};

export default App;
