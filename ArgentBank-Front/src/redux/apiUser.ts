const BASE_URL = "http://localhost:3001/api/v1/user";

class ApiUser {
    async login(data: {
        email: string,
        password: string,
        remember?: boolean
    }) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log("Token reçu : ", responseData.token); 
            return responseData; 
        } else {
            throw new Error("Error Login");
        }
    }

    async getToken(token: string) {
        const response = await fetch(`${BASE_URL}/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Error with Token");
        }
    }
}

export const userApi = new ApiUser();