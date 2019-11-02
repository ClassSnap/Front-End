export const sampleQuestions = [
  {
    class: "Class 1",
    teacher: "Ms. Li",
    subject: "Math",
    date: "9/26/2019",
    question: "How do you solve (16-3) + 4 x 7? Explain your reasoning.",
  },
  {
    class: "Class 1",
    teacher: "Ms. Li",
    subject: "ELAR",
    date: "9/27/2019",
    question:
      "Explain the difference between Simile and Metaphor; Create an example of each of them",
  },
];

export const sampleStudentData = [
  {
    id: 1,
    question: "How do you solve (16-3) + 4 x 7? Explain your reasoning.",
    class: "Class 1",
    subject: "Math",
    date: "9/26/2019",
    rateOne: [{ name: "Simon Reed" }, { name: "Chris Singleton" }],
    rateTwo: [
      { name: "Daniel Ayala" },
      { name: "Charlie Tan" },
      { name: "Amiah Collins" },
    ],
    rateThree: [{ name: "Roman Roberts" }, { name: "Jasmine Salas" }],
    rateFour: [
      { name: "Nicholas Lozano" },
      { name: "Jordin Yeung" },
      { name: "Liz Rios" },
      { name: "Camila Garcia" },
    ],
    rateFive: [{ name: "Marciela Gonzalez" }, { name: "Zoey Prince" }],
    average: 3.3,
  },
  {
    id: 2,
    question:
      "Explain the difference between Simile and Metaphor; create an example of each of them",
    class: "Class 1",
    subject: "ELAR",
    date: "9/27/2019",
    rateOne: ["Simon Reed ", "Chris Singleton"],
    rateTwo: ["Daniel Ayala ", "Charlie Tan ", "Amiah Collins"],
    rateThree: ["Roman Roberts ", "Jasmine Salas"],
    rateFour: [
      "Nicholas Lozano ",
      "Jordin Yeung ",
      "Liz Rios ",
      "Camila Garcia",
    ],
    rateFive: ["Marciela Gonzalez ", "Zoey Prince"],
    average: 3.5,
  },
];
