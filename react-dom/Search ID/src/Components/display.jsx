import './display.css'

function DisplayStudent({ students }) {
    return (
        <div className="displayStudent">
            {students.map(({ id, name, age, course}, index) => (
                <p style={{whiteSpace: 'pre-line'}}  key={index}>
                    {`ID: ${id}
                    name: ${name}
                    age: ${age}
                    course: ${course}`}
                </p>
            ))}
        </div>
    )
}

export default DisplayStudent

