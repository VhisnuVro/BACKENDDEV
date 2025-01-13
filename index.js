const express = require('express')
const cors = require("cors");
const app = express()
const PORT = 3000;
app.use(cors());
app.use(express.json());

const users = [
    {
        "id": 1,
        "username": "john_doe",
        "name": "John Doe",
        "repoCount": 12,
        "location": "New York, USA"
    },
    {
        "id": 2,
        "username": "jane_smith",
        "name": "Jane Smith",
        "repoCount": 8,
        "location": "London, UK"
    },
    {
        "id": 3,
        "username": "ali_ahmed",
        "name": "Ali Ahmed",
        "repoCount": 20,
        "location": "Cairo, Egypt"
    },
    {
        "id": 4,
        "username": "maria_garcia",
        "name": "Maria Garcia",
        "repoCount": 15,
        "location": "Madrid, Spain"
    },
    {
        "id": 5,
        "username": "hiro_tanaka",
        "name": "Hiro Tanaka",
        "repoCount": 10,
        "location": "Tokyo, Japan"
    },
    {
        "id": 6,
        "username": "lisa_kim",
        "name": "Lisa Kim",
        "repoCount": 7,
        "location": "Seoul, South Korea"
    },
    {
        "id": 7,
        "username": "david_ross",
        "name": "David Ross",
        "repoCount": 5,
        "location": "Sydney, Australia"
    },
    {
        "id": 8,
        "username": "chen_wei",
        "name": "Chen Wei",
        "repoCount": 18,
        "location": "Beijing, China"
    },
    {
        "id": 9,
        "username": "amelie_dupont",
        "name": "Amélie Dupont",
        "repoCount": 14,
        "location": "Paris, France"
    },
    {
        "id": 10,
        "username": "mohamed_hasan",
        "name": "Mohamed Hasan",
        "repoCount": 22,
        "location": "Dubai, UAE"
    }
]

app.get("/users", async (req, res) => {
    try {
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: "users not found", error: error });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        let user = users.find((user) => user.id === id)
        if (!user)
            return res.status(404).json({ message: "User not found" });
        return res.status(200).json({ user });

    } catch (error) {
        return res.status(500).json({ message: "Users not found", error: error });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});