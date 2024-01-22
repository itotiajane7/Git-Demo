import React, { useEffect, useState } from 'react';
import data from './assets/data.json';

const App = () => {
  const [value, setValue] = useState({
    name: '',
    age: '',
    height: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      for (const item of data) {
        setValue((prevValue) => ({
          ...prevValue,
          name: item.name,
          age: item.age,
          height: item.gpa,
        }));
      }
    };

    fetchData();
  }, []);

  console.log(value);

  return (
    <div key={value.height}>
      hello {value.name} your age is {value.age}
    </div>
  );
};

export default App;
