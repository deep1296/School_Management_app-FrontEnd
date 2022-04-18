import {getTeachersData} from '../Redux/TeachersData/action';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import "./Home.css";


export const Home = () => {

    // const [data , setData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachersData());
    }, [])

    const teachers = useSelector((state) => state.teachersData.teachers);
    
    console.log('teachersData: ', teachers);

    return(
        <div>
            <h1>Home</h1>
            <div className="container" >

                <table>
                    <thead>
                        <tr >
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                   {teachers.map((element)=>{
                       return<tr  key={element.id}>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.gender}</td>
                            <td>{element.age}</td>
                       </tr>
                   })}
                </tbody>

            </div>

        </div>
    )
}