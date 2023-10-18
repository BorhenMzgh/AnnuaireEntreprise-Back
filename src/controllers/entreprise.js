
const EntrModel = require('../models/entreprise');

const getPenEntre = async (req, res) => {
    try {
    const Entre = await EntrModel.find({status : 'pending'});
    if(Entre.length === 0) return res.status(404).send("Not Found");
    res.status(200).send(Entre);
    } catch (error) {
        res.status(500).send("Error");

    }
}



const getEntre = async (req, res) => {
    try {
    const Entre = await EntrModel.find({status : 'accepted'});
    if(Entre.length === 0) return res.status(404).send("Not Found");
    res.status(200).send(Entre);
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}






const createEntre =  (req, res) => {
    try {
        const {libelle, activite, responsable, adresse, ville, gouvernerat, pays, map} = req.body;
        const response = EntrModel.create({libelle, activite, responsable, adresse, ville, gouvernerat, pays, map, status: 'pending'});
        res.status(201).send(response);
    } catch (error) {
        res.send("error");
        
    }
}



const deleteEntre = async (req, res) => {
    try {
    const id = req.params.id;
    const response = await EntrModel.deleteOne({_id : id});
    if(response.deletedCount === 0) return res.status(404).send("Not Found");
    res.status(204).send();
    } catch (error) {
        res.status(500).send("Error");
    }
}






const updateEntre = async (req, res) => {
    try {
    const id = req.params.id;
    const response = await EntrModel.findOneAndUpdate({_id : id}, {status: 'accepted'});
    if(response.nModified === 0) return res.status(404).send("Not Found");
    res.status(204).send();
    } catch (error) {
        res.status(500).send("Error");
    }
}
      





module.exports = {
    getEntre,
    createEntre,
    updateEntre,
    deleteEntre,
    getPenEntre,
}