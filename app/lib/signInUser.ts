import SignInType from "../types/SignInType";

async function signInUser({ email, password }: SignInType) {
    const data = { email, password }; // Your data object

    try {
        const response = await fetch("https://akil-backend.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        console.log("response");
        
        if (!response.ok) {
            throw new Error("Failed to sign in");
        }
        
        const resData = await response.json(); // Parse the JSON response
        console.log(resData);
        return resData;
    } catch (error) {
        console.error("Error in signInUser:", error);
        throw error;
    }
}
export default signInUser