import { useState } from "react";
import { registerUser } from "./api/auth";
import { useMutation } from "@tanstack/react-query";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reply, setReply] = useState("");
  const [password, setPassword] = useState("");

  // const sendDetail = async () => {
  //   const response = await fetch("http://localhost:3000/api/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ name, email, password })
  //   });

  //   const data = await response.json();
  //   setReply(data.message);

  // };
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setReply(data.message);
      console.log(data);
    },
    onError: (error) => {
      setReply(error.response.data.message);
      console.log(error);
    }
  })

  const sendDetail = () => {
    mutation.mutate({ name, email, password });
  }


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

      <button className="button btn-primary rounded-full px-3 text-white border bg-amber-700 " onClick={sendDetail} disabled={mutation.isLoading}>{mutation.isLoading ? "Sending..." : "Submit"}</button>

      <h3>{reply}</h3>
    </div>
  );
};

export default App;
