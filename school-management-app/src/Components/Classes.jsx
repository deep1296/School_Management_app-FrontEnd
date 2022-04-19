import {useParams} from 'react-router-dom';

export const Classes = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            
        </div>
    )
}