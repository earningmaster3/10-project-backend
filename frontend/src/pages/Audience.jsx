import { allAudience } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Audience = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["audience"],
        queryFn: allAudience,
    });

    if (isLoading) {
        return <p className="">Loading users...</p>
    }

    if (isError) {
        return <p className="">Error loading users: {error.message}</p>
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            {data?.map((user) => (
                <div className="border rounded-full px-4 py-2 hover:border-amber-700 w-64 shadow-sm" key={user._id || user.id}>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Audience;