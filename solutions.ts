// Problem-1

const filterEvenNumbers = (input: number[]) => {
  return input.filter((item) => item % 2 === 0);
};

//problem-2

const reverseString = (input: string) => {
  return input.split("").reverse().join("");
};

// problem-3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): "String" | "Number" => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Problem 4:

const getProperty = <T, K extends keyof T>(input1: T, input2: K) => {
  return input1[input2];
};

const user = { id: 1, name: "John Doe", age: 21 };

//problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

// problem-6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name:${this.name} Age:${this.age} Grade:${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

// problem-7
const getIntersection = (array1: number[], array2: number[]): number[] => {
  return array1.filter((item) => array2.includes(item));
};
