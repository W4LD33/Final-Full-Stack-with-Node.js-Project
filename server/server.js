require('dotenv').config({ path: './config/.env' });
const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

// GET all Questions
app.get('/questions', async (req,res) => {
    try {
        const questions = await pool.query(
            'SELECT * FROM questions'
        )
        res.json(questions.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' });
    }
})

// POST a new question
app.post('/questions', async (req,res) => {
    try {
        const { title, body, user_id } = req.body;
        const newQuestion = await pool.query(
            'INSERT INTO questions (title, body, user_id) VALUES ($1, $2, $3) RETURNING *',
            [title, body, user_id]
        )
        res.json(newQuestion.rows[0])
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' });
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))