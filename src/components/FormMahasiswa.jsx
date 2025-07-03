function FormMahasiswa({ form, onChange, onSubmit, isEdit }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 space-y-2">
      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={form.nama}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="nim"
        placeholder="NIM"
        value={form.nim}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        {isEdit ? "Update" : "Tambah"}
      </button>
    </form>
  );
}

export default FormMahasiswa;
