import { Users, Edit3, Trash2, GraduationCap } from "lucide-react";

const DaftarMahasiswa = ({ data, onEdit, onDelete }) => {
  if (data.length === 0) {
    return (
      <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30 text-center">
        <div className="p-4 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full backdrop-blur-sm inline-block mb-4">
          <Users className="w-8 h-8 text-white/60" />
        </div>
        <p className="text-white/70 text-lg">Belum ada data mahasiswa</p>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full backdrop-blur-sm">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-white">
          Daftar Mahasiswa ({data.length})
        </h2>
      </div>
      
      <div className="space-y-4">
        {data.map((mahasiswa, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full backdrop-blur-sm">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {mahasiswa.nama}
                  </h3>
                  <p className="text-white/70">NIM: {mahasiswa.nim}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(index)}
                  className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300 backdrop-blur-sm group"
                >
                  <Edit3 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="p-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 backdrop-blur-sm group"
                >
                  <Trash2 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarMahasiswa;