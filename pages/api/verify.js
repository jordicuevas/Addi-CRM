let indetificationRecords = [
  {
    identification: "123456",
    dataValid: true,
  },
  {
    identification: "12345",
    dataValid: true,
  },
  {
    identification: "1234",
    dataValid: true,
  },
];

export default (req, res) => {
  if (req.body) {
    let personCheck = indetificationRecords.find(
      (person) => person.identification === req.body
    );
    if (personCheck.dataValid) {
      res.status(200).json({ isValid: true });
    } else {
      res.status(200).json({ isValid: false });
    }
  }
};
