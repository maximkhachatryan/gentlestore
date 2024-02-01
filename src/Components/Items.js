import Item from "./Item";

export default function App() {
  let container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  
  return (
    <div>
      <div style={container}>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        <div><Item /></div>
        
      </div>
    </div>
  );
}
