import { students } from '../script/data.js'

function List(){
    return(
        <ul>
            {students
                .sort((a, b) => a.surname.localeCompare(b.surname))
                .map((student) => (
                <li key={student.id}> {student.surname} {student.name} </li>
            ))}
        </ul>
    )
}

export default List