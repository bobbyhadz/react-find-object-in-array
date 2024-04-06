import './App.css';

const App = () => {
  const arr = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Germany'},
    {id: 3, country: 'Austria'},
  ];

  // ✅ Find the first object that matches a condition
  const found = arr.find(obj => {
    return obj.id === 1;
  });

  // 👇️ {id: 1, country: 'Austria'}
  console.log(found);

  // -----------------------

  // ✅ Find multiple objects that satisfy a condition
  const filtered = arr.filter(obj => {
    return obj.country === 'Austria';
  });

  // 👇️ [{id: 1, country: 'Austria'}, {id: 3, country: 'Austria'}]
  console.log(filtered);

  return (
    <div>
      {/* 👇️ render single object */}
      {found && (
        <div>
          <h2>id: {found.id}</h2>
          <h2>country: {found.country}</h2>
        </div>
      )}

      <hr />

      {/* 👇️ render array of objects */}
      {filtered.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
