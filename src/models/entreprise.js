const mongoose = require('mongoose');

const EntrSchema = new mongoose.Schema(
  {
    libelle: {
      type: String,
      required: true,

    },
    activite: {
      type: String,
      required: true,
    },
    responsable: {
        type: String,
        required: true,
        
    },
    adresse: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    gouvernerat: {
        type: String,
        required: true,
    },
    pays: {
        type: String,
        required: true,
    },
    map: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
    
  },
  { timestamps: true },
);

const Entr = mongoose.model('Entreprise', EntrSchema);

module.exports = Entr;