import './display.css';

function DisplayStudent({ students }) {
  return (
    <div className="displayStudent">
      {students.map(({ id, name, age, course }, index) => (
        <div className="studentInfo" key={index}>
          <p>
            {`ID: ${id}
                    name: ${name}
                    age: ${age}
                    course: ${course}`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayStudent;


