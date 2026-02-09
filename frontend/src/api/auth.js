import api from "./axios";
//it replace the traditional fetch methode 

export const registerUser = async (userData) => {
    {
        const res = await api.post("api/users", userData);
        return res.data;

    }
}

export const allAudience = async () => {
    const res = await api.get("api/audience");
    return res.data;
}