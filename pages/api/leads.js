 

let leads = [
  {
    identification: "123456",
    name: "Jhon",
    lastname: "Doe",
    birthDate: "2021-10-12",
    age: 25,
    isLead: false,
    isVerified: false,
    score: 0,
    gender: "M",
    qualified: false
  },
  {
    identification: "12345",
    name: "Charles",
    lastname: "Doe",
    birthDate: "2021-09-12",
    age: 23,
    isLead: false,
    isVerified: false,
    score: 0,
    gender: "M",
    qualified: false
  },
  {
    identification: "1234",
    name: "Mary",
    lastname: "Doe",
    birthDate: "2021-10-17",
    age: 32,
    isVerified: false,
    isProspect: false,
    score: 0,
    gender: "F",
    qualified: false
  },
];
export default (req, res) => {
   res.status(200).json(leads);
};
