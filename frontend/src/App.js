import {BrowserRouter, Routes, Route} from "react-router-dom";
import Kelas from "./components/Kelas";
import AddKelas from "./components/AddKelas";
import EditKelas from "./components/EditKelas";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kelas/>}/>
        <Route path="add" element={<AddKelas/>}/>
        <Route path="edit/:id" element={<EditKelas/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;