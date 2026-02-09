import prisma from "../../prisma/client.js";

export const allAudience = async (req, res) => {
    try {
        const audience = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                // Add other non-sensitive fields as needed
            }
        });
        res.json(audience);
    } catch (error) {
        console.error("Error fetching audience:", error);
        res.status(500).json({ message: "Error fetching audience", error: error.message });
    }
};
