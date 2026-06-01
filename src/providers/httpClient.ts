export const httpClient = async (
    url: string,
    options: RequestInit = {}
) => {
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};