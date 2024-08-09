const fetchUserData = async (param: number) => {
  try {
    const response = await fetch(
      `https://random-data-api.com/api/users/random_user?size=${param}`
    );

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse the JSON from the response
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error as needed
  }
};

export default fetchUserData;
