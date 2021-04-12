 
export default (req, res) => {
    let score = Math.floor(Math.random() * 101);
    res.status(200).json({leadScore:score});
  };
  