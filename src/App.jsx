import { useState } from "react";
import { GraduationCap } from "lucide-react";
import FormMahasiswa from "./components/FormMahasiswa";
import DaftarMahasiswa from "./components/DaftarMahasiswa";

const App = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [form, setForm] = useState({ nama: "", nim: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nama.trim() === "" || form.nim.trim() === "") return;
    
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

  const handleDelete = (index) => {
    const data = mahasiswa.filter((_, i) => i !== index);
    setMahasiswa(data);
    if (editIndex === index) {
      setEditIndex(null);
      setForm({ nama: "", nim: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-2xl mx-auto pt-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Data Mahasiswa
          </h1>
          <p className="text-white/70 text-lg">
            Kelola data mahasiswa dengan mudah dan modern
          </p>
        </div>

        {/* Form and List */}
        <FormMahasiswa
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isEdit={editIndex !== null}
        />
        
        <DaftarMahasiswa 
          data={mahasiswa} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;