import { UserPlus } from "lucide-react";

const FormMahasiswa = ({ form, onChange, onSubmit, isEdit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30 mb-8 hover:bg-white/25 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm">
          <UserPlus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-white">
          {isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/90">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={onChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/90">
            NIM
          </label>
          <input
            type="text"
            name="nim"
            value={form.nim}
            onChange={onChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            placeholder="Masukkan NIM"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
        >
          {isEdit ? "Update Data" : "Tambah Mahasiswa"}
        </button>
      </form>
    </div>
  );
};

export default FormMahasiswa;