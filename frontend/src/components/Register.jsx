import { useState } from "react";
import { registerUser } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reply, setReply] = useState("");

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            setReply(data.message);
            console.log(data);
        },
        onError: (error) => {
            setReply(error.response?.data?.message || "An error occurred");
            console.log(error);
        }
    });

    const sendDetail = () => {
        mutation.mutate({ name, email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen border-amber-200 gap-3">
            <h3 className="text-2xl font-bold text-amber-700">DARIUS SECRETS</h3>
            <input
                className="border rounded-full px-2 py-1 hover:border-amber-700"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="border rounded-full px-2 py-1 hover:border-amber-700"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="border rounded-full px-2 py-1 hover:border-amber-700"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="button btn-primary rounded-full px-3 text-white border bg-amber-700"
                onClick={sendDetail}
                disabled={mutation.isPending}
            >
                {mutation.isPending ? "Sending..." : "Submit"}
            </button>

            <h3>{reply}</h3>
            <button className="border rounded-full px-2 py-1 hover:border-amber-700" onClick={() => navigate("/api/audience")}>View Audience</button>
        </div>
    );
};

export default Register;