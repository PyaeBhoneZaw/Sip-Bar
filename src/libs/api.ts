// lib/api.ts
export const fetchData = async (endpoint: string) => {
    const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    if (response.ok) {
        const responseBody = await response.json();
        // console.log(`data ${data}`);
        // setData(responseBody);
        console.log(`data ${responseBody}`);
        return responseBody;
    }
};
