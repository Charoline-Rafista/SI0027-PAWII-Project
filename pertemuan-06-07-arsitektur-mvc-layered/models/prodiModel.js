let prodi = [
  { id: 1, nama: "Sistem Informasi", jenjang: "S1", fakultasId: 1 },
  { id: 2, nama: "Informatika", jenjang: "S1", fakultasId: 1 },
  { id: 3, nama: "Akuntansi", jenjang: "S1", fakultasId: 2 },
  { id: 4, nama: "Manajemen", jenjang: "S1", fakultasId: 2 },
];

function getAll() {
  return prodi;
}

function getById(id) {
  return prodi.find((f) => f.id === id);
}

function create(data) {
  const baru = { id: prodi.length + 1, ...data };
  prodi.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };