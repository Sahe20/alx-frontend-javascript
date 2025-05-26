// Defining the teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // This index signature allows any other properties
}

// Creating a teacher object using the interface
const teacher3: Teacher = {
  firstName: 'Musa',
  fullTimeEmployee: false,
  lastName: 'Jackiteh',
  location: 'Brewerville',
  contract: false,
};

// Output 
console.log(teacher3);

// Defining the Directors interface
interface director1 {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  numberOfReports: number;
  [key: string]: any;  // This index signature allows any other properties
}

// Creating director1 object using the interface
const director1: Teacher = {
  firstName: 'Musa',
  fullTimeEmployee: false,
  lastName: 'Jackiteh',
  location: 'Brewerville',
  contract: false,
  numberOfReports: 23,
};

// Output 
console.log(teacher3);

// Defining the interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Using the interface for the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Defining Constructor Interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Defining the Class Behavior Interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class that implements the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// test
const student = new StudentClass("Musa", "Jackiteh");
console.log(student.workOnHomework());  // Output: Currently working

