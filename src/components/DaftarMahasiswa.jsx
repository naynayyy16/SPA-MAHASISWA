function DaftarMahasiswa({ data, onEdit }) {
  return (
    <ul className="space-y-2">
      {data.map((mhs, index) => (
        <li
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>{mhs.nama} - {mhs.nim}</span>
          <button
            onClick={() => onEdit(index)}
            className="text-sm text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarMahasiswa;
