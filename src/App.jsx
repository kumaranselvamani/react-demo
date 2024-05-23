const App = () => {
  
  const friends = [
    {id:1,name:"kummaran",age:29},
    {id:2,name:"selva",age:25},
  ]

   return (
    <div>
    <h1></h1>
    <ul>
      {
      friends.map((friend) =>
      <li key={friend.id}>{friend.name} {friend.age}</li>)
}
    </ul>
    </div>
  )
}

export default App;