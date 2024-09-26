const { validateInput } = require('@th3hero/request-validator');

const registerStudent = async (req, res) => {
    const validation = await validateInput(req, {
        'name': 'required|string',
        'email': 'required|email',
        'phone': 'required|string|digits:10',
        'gender': 'required|string|in:male,female,others',
    });
    if (validation.failed) return res.status(400).json({"status": false, "message": "Input validation failed", "data": validation.errors});
    const body = req.body;
    const query = `INSERT INTO 'students' (name, email, phone, gender) VALUES (?, ?, ?, ?)`;
    const params = [body.name, body.email, body.phone, body.gender];
    return res.status(200).json({"status": true, "message": "Student registered", "data": req.body});
}

//query to database

module.exports = {registerStudent};