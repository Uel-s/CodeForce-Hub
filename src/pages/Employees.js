import React, {useState} from 'react'
import Employee from '../components/Employee'

//import EditEmployee from "./components/EditEmployee";
//import AddEmployee from "./components/AddEmployee";
//import { v4 as uuidv4 } from "uuid";

function Employees() {
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: 'Chris',
			role: 'Frontend Developer',
			img: 'image1.jpeg',
		},
		{
			id: 2,
			name: 'Eninem',
			role: 'Backend Developer',
			img: 'image2.jpeg',
		},
		{
			id: 3,
			name: 'Anne',
			role: 'Junior Dev',
			img: 'image3.jpeg',
		},
		{
			id: 4,
			name: 'Doja',
			role: 'DevOps',
			img: 'image4.jpeg',
		},
		{
			id: 5,
			name: 'Eva',
			role: 'UI/UX Designer',
			img: 'image5.jpeg',
		},
		{
			id: 6,
			name: 'Ndumba',
			role: 'Software Architect',
			img: 'image6.jpeg',
		},
		{
			id: 7,
			name: 'Griffin',
			role: 'QA Enginner',
			img: 'image7.jpeg',
		},
		{
			id: 8,
			name: 'Hank',
			role: 'Database Administrator',
			img: 'image8.jpeg',
		},
		{
			id: 9,
			name: 'Lee',
			role: 'Mobile App Dev',
			img: 'image9.jpeg',
		},
		{
			id: 10,
			name: 'Jack',
			role: 'Cloud Enginner',
			img: 'image10.jpeg',
		},
		{
			id: 11,
			name: 'Krators',
			role: 'Security Analyst',
			img: 'image11.jpeg',
		},
		{
			id: 12,
			name: 'Leo',
			role: 'Machine Learning Engineer',
			img: 'image12.jpeg',
		},
		{
			id: 13,
			name: 'Octavia',
			role: 'Data Scientist',
			img: 'image13.jpeg',
		},
		{
			id: 14,
			name: 'Nathan',
			role: 'Embedded Systems Engineer',
			img: 'image14.jpeg',
		},
		{
			id: 15,
			name: 'Trin',
			role: 'Software Engineer in Test',
			img: 'image15.jpeg',
		},
	])
	const showEmployees = true

	function updateEmployee(id, newName, newRole) {
		const updateEmployees = employees.map(
			employee => {
				if (id === employee.id) {
					return {
						...employee,
						name: newName,
						role: newRole,
					}
				}
				return employee
			},
		)
		setEmployees(updateEmployees)
	}

	return (
		<div className="">
			{showEmployees ? (
				<>
					<div className="flex flex-wrap justify-center">
						{employees.map(employee => {
							return (
								<Employee
									key={employee.id}
									id={employee.id}
									name={employee.name}
									role={employee.role}
									img={employee.img}
									updateEmployee={updateEmployee}
								/>
							)
						})}
					</div>
				</>
			) : (
				<p>No employees found</p>
			)}
		</div>
	)
}

export default Employees
