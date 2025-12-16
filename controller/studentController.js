const getStudentDetails = (req,res)=>{
    const mydata={name:"AEC",rollno:"123456"};
    res.send(mydata);
};
const addStudents = (req,res)=>{
    const data =req.body;
    console.log(data);
    res.send("data added");
};
export {getStudentDetails,addStudents};