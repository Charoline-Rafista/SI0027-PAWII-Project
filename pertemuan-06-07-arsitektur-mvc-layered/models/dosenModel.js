let prodi = [
  { id: 1, nama: "Rocky", nip:"D001" , prodiId: 1 },
  { id: 2, nama: "Anton", nip: "D002", prodiId: 2 },
  { id: 3, nama: "Garry", nip: "D003", proodiId: 3 },
  { id: 4, nama: "Siti", nip: "D004", prodiId: 4 },
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((f) => f.id === id);
}

function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };