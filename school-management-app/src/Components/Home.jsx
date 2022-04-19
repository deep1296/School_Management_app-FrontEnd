import {getTeachersData,fetchTeachersData} from '../Redux/TeachersData/action';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MDBTable,MDBTableHead,MDBTableBody ,MDBRow,MDBCol,MDBContainer} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import "./Home.css";


export const Home = () => {

    const [search , setSearch] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachersData());
    }, [])

    const teachers = useSelector((state) => state.teachersData.teachers);
    const loading = useSelector((state) => state.teachersData.loading);
    const error = useSelector((state) => state.teachersData.error);
    const success = useSelector((state) => state.teachersData.success);
    
    const handleAgeSortAsc = () => {
        //console.log("age sort");
        let sorted =teachers.sort((a,b) => a.age - b.age);
        dispatch(fetchTeachersData(sorted));
    }

    const handleAgeSortDec = () => {
        //console.log("age sort");
        let sorted =teachers.sort((a,b) => b.age - a.age);
        dispatch(fetchTeachersData(sorted));
    }
    const handleSearch = () => {
        //console.log("search");
        let searchData = teachers.filter((teacher) => {
            return teacher.name.toLowerCase().includes(search.toLowerCase());
        })
        dispatch(fetchTeachersData(searchData));
        setSearch("");
    }
    
    const handleReset = () => {
        //console.log("reset");
        dispatch(getTeachersData());
    }

    return(
        <MDBContainer>
            <div style={{padding:"20px",borderBottom:"1px solid #f1f1f1"}}>
            <button onClick={handleAgeSortAsc} className="sortingBtn">Sort By Age Asc</button>
            <button onClick={handleAgeSortDec}className="sortingBtn">Sort By Age Desc</button>
            <br />
            <input 
            type="text"
            onChange={(e)=> setSearch(e.target.value)}
            placeholder="Search By Name"
            value={search}
            id="search"
            style={{ width: "250px", height: "40px", fontSize: "20px" }}

            />
            <button onClick={handleSearch} className="sortingBtn">Search</button>
            <button onClick={handleReset} className="sortingBtn">Reset</button>

            </div>
            <div style={{marginTop:"100px"}}>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBTable style={{borderBottom:"1px solid #f1f1f1",width:"90%",margin:"auto"}}>
                            <MDBTableHead style={{height:"40px" ,backgroundColor:"#B6FFCE",color:"black"}}>
                                <tr>
                                    <th>No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Classes</th>
                                </tr>
                            </MDBTableHead>
                            {teachers.length===0 ?( 
                                <MDBTableBody className="align-center mb 0">
                                    <tr>
                                        <td colSpan={8} className="text-center mb 0">No Data Found</td>
                                    </tr>
                                </MDBTableBody>):(
                                    teachers.map((teacher,index) => (
                                        <MDBTableBody key={teacher.id}>
                                            <th scope="row"> {index+1}</th>
                                            <td>{teacher.name}</td>
                                            <td>{teacher.email}</td>
                                            <td>{teacher.gender}</td>
                                            <td>{teacher.age}</td>
                                            <Link to={`/teachers/${teacher._id}`}>class</Link>
                                        </MDBTableBody>
                                    ))
                                )}
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    )
}