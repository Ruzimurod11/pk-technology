interface CatApiResponse {
    id: string;
    url: string;
    width: number;
    height: number;
}

export const fetchCats = async (limit = 1): Promise<string[]> => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
    const data: CatApiResponse[] = await response.json();
    console.log(data);
    return data.map((cat) => cat.url);
};
