let criminalRecords = [
  {
    identification: "123456",
    amountCriminalRecords: 0,
  },
  {
    identification: "12345",
    amountCriminalRecords: 0,
  },
  {
    identification: "1234",
    amountCriminalRecords: 2,
  },
];

export default (req, res) => {
  if (req.body) {
    let personCheck = criminalRecords.find(
      (person) => person.identification === req.body
    );
    if (personCheck.amountCriminalRecords !== 0) {
      res.status(200).json({ isCriminal: true });
    } else {
      res.status(200).json({ isCriminal: false });
    }
  }
};
