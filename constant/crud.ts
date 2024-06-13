// GET
export const GET_API = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// POST
export const POST_API = async (payload: any) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// PUT
export const PUT_API = async (id: any, payload: any) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// DELETE
export const DELETE_API = async (id: any) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
