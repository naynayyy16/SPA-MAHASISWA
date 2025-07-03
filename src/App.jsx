import { useState } from "react";
import FormMahasiswa from "./components/FormMahasiswa";
import DaftarMahasiswa from "./components/DaftarMahasiswa";

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [form, setForm] = useState({ nama: "", nim: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const data = [...mahasiswa];
      data[editIndex] = form;
      setMahasiswa(data);
      setEditIndex(null);
    } else {
      setMahasiswa([...mahasiswa, form]);
    }
    setForm({ nama: "", nim: "" });
  };

  const handleEdit = (index) => {
    setForm(mahasiswa[index]);
    setEditIndex(index);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Data Mahasiswa</h1>
      <FormMahasiswa
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEdit={editIndex !== null}
      />
      <DaftarMahasiswa data={mahasiswa} onEdit={handleEdit} />
    </div>
  );
}

export default App;
