import { useParams } from "react-router-dom";
import { getOneTeacher } from "../Redux/TeachersData/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Classes.css";

export const Classes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTeacher(id));
  }, []);

  const teacher = useSelector((state) => state.teachersData.individualTeacher);
  //console.log('teacher: ', teacher);
  const classes = teacher.class_id;

  console.log(classes, "classes");


  return (
    <div className="container" key={teacher.id}>
      <span className="pTag">Teacher Name : </span>
      <span className="data"> {teacher.name}</span>
      <br />
      <span className="pTag">Email : </span>
      <span className="data"> {teacher.email}</span>
      <br />
      <span className="pTag">Gender : </span>
      <span className="data"> {teacher.gender}</span>
      <br />
      <span className="pTag">Age : </span>
      <span className="data"> {teacher.age}</span>
      <br />

      {classes && classes?.map((classe) => {
        return (
          <div key={classe.id}>
            <h3 style={{color:' #F7CCAC', backgroundColor:"#3A3845"}}>Classes Details</h3>
            <span className="pTag"> Section : </span>
            <span className="data"> {classe.section}</span><br />
            <span className="pTag"> Subject : </span>
            <span className="data"> {classe.subject}</span><br />
            <span className="pTag"> Grade : </span>
            <span className="data"> {classe.grade}</span><br />
          </div>
        );
      })}
    </div>
  );
};
