export default function handler(req, res) {
  const { email, password } = req.body;
  res.status(200).json({
    name: `hello world ${email} -- ${password} ${req.body}`,
  });
}
