import prisma from "../../prisma/client.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check if name and email are provided or not

        console.log(name, email, password);
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" });
        }

        //check if the user is already present in the database ornot 

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        //just for testing purpose if the nameis this and email is this thenretunr this 

        if (name === "lipu" && email === "lipum142@gmail.com") {
            return res.status(400).json({ message: "Here is your data " })
        }


        //if user is not present then create a new user in thee database

        const newData = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        if (newData) {
            console.log("Data inserted successfully");
        }

        if (newData) {
            res.json({
                message: "User created successfully",
                userData: {
                    name,
                    email
                }
            })
        }

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }


}