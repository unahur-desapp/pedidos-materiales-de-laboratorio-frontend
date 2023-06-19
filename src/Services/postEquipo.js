

  export async function postEquipo(data) {

    const requestJson = JSON.stringify(data);
    try {
      const response = await fetch("http://localhost:3000/api/equipo/post", {
        method: "POST",
        body: requestJson,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseText = await response.text();
      console.log(responseText);
    } catch (e) {
      console.log(e);
    }
  
  };
  export default postEquipo;
  