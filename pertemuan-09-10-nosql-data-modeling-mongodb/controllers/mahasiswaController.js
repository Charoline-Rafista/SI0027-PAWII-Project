// Mini Project - Pertemuan 9-10: Controller Mahasiswa
// TODO 2: lengkapi setiap handler agar memanggil Model Mongoose yang sesuai.

const Mahasiswa = require("../models/mahasiswaModel");
const mongoose = require("mongoose"); //validasi objectId

// GET semua mahasiswa
exports.getAll = async (req, res) => {
  // TODO: ambil seluruh data dengan Mahasiswa.find(), sertakan .populate('prodiId')
  // lalu kirim sebagai JSON
  try {
    const data = await Mahasiswa.find().populate("prodiId");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET satu mahasiswa berdasarkan ID
exports.getById = async (req, res) => {
  // TODO: ambil satu data dengan Mahasiswa.findById(req.params.id).populate('prodiId')
  // kirim 404 dengan { message: 'Tidak ditemukan' } jika tidak ada
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    const data = await Mahasiswa.findById(req.params.id)
      .populate("prodiId");

    if (!data) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST tambah mahasiswa
exports.create = async (req, res) => {
  // TODO: buat data baru dengan Mahasiswa.create(req.body), bungkus try/catch
  // kirim response dengan status 201, atau 400 jika validasi gagal
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

// PUT ubah mahasiswa
exports.update = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndUpdate(req.params.id, req.body,
  // { new: true, runValidators: true }), bungkus try/catch
   try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    const data = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!data) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE hapus mahasiswa
exports.remove = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndDelete(req.params.id),
  // kirim status 204 jika berhasil, 404 jika tidak ditemukan
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    const data = await Mahasiswa.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Tidak ditemukan"
      });
    }

    return res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
