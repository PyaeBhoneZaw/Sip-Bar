// lib/api.ts
export const fetchData = async () => {
    const response = await fetch(
        // "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        "http://127.0.0.1:8800/drinks.json"
    );
    if (response.ok) {
        const responseBody = await response.json();
        // console.log(`data ${data}`);
        // setData(responseBody);
        console.log(`data ${responseBody}`);
        return responseBody;
    }

    return await response.json()
};
