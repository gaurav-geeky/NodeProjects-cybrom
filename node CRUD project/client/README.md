if give ID : it give data in object form {} 

other : give dat in array form  [] 




rollno of usestate  is  key in  handleSubmit's rollno

 handleSubmit's rollno (value)  is   input's value = onchange..

const dataSearch = async (req, res)=> {
    const {rollno} = req.body; 
    const student = await stuModel.find({rollno: rollno})
    console.log(student); 
    res.send(student); 
}
controllers  key is submits key 
value is its value

#  update ___   edit / delete 
1.  front end  
2. backend 

req.body only about form fill.  

req.query   ?  query string 

parameter k through   req.params 
