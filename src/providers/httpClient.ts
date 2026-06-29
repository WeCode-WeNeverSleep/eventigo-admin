export const httpClient = async (
    url: string,
    options: RequestInit = {}
) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = new Error(
            `HTTP error ${response.status}: ${response.statusText}`
        ) as Error & { status?: number };

        error.status = response.status;

        throw error;
    }

    const text = await response.text();

    if (!text) {
        return null;
    }

    return JSON.parse(text);
};