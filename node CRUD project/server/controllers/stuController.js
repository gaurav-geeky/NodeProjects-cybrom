const stuModel = require('../models/stuModel');

const homePg = (req, res) => {
    res.send("hello node")
}

const savePg = async (req, res) => {
    console.log(req.body);
    const { name, city, rollno, fees } = req.body
    const stu = await stuModel.create({
        name: name,
        rollno: rollno,
        city: city,
        fees: fees,
    });
    res.send("Data saved successfully in backend...");
}

const displayPg = async (req, res) => {
    const myData = await stuModel.find();
    res.send(myData);
}

const dataSearch = async (req, res) => {
    const { rollno } = req.body;
    const student = await stuModel.find({ rollno: rollno })
    console.log(student);
    res.send(student);
}

const updateDisplay = async (req, res) => {
    const Student = await stuModel.find();
    res.send(Student);
}

const updateDelete = async (req, res) => {
    const { id } = req.query;
    const Student = await stuModel.findByIdAndDelete(id);
    res.send({ msg: "Data delete successfully.." });
}

const editData = async (req, res) => {
    const { id } = req.params;
    const stData = await stuModel.findById(id);
    console.log(stData);
    res.send(stData);
}

const editSave = async (req, res) => {
    const { _id, name, rollno, city, fees } = req.body;
    const stData = await stuModel.findByIdAndUpdate(_id, {
        name: name,
        rollno: rollno,
        city: city,
        fees: fees,
    })
    res.send({ msg: "data saved succesfully ... " });
}

const adminInfo = async (req, res) => {
    console.log(req.body)
}

module.exports = {
    homePg,
    savePg,
    displayPg,
    dataSearch,
    updateDisplay,
    updateDelete,
    editData,
    editSave,
    adminInfo, 

}

