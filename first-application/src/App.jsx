import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
     .then((data) => console.log(data));
  

},[]);
return (
  <div> 
    <pre> {JSON.stringify( data, null, 2)}</pre>
  </div>
  

);
}
export default App;