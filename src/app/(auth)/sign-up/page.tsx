export default function RegisterPage() {

    // const formAction = async (formData: FormData) => {
    //     "use server";
    //     const email = formData.get("email") as string;
    //     const password = formData.get("password") as string;
    //     const result = await signIn("credentials", { email, password });
    //     if (result.error) {
    //         return { error: result.error.message };
    //     }
    //     redirect("/");
    // };
    return (
        <form  className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
            <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded-md p-2" />
            <input type="email" name="email" placeholder="Email" className="border border-gray-300 rounded-md p-2" />
            <input type="password" name="password" placeholder="Password" className="border border-gray-300 rounded-md p-2" />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Register</button>
            
        </form>
    );
}