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
