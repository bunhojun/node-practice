const API_URL = "http://localhost:8080";

async function httpGetPlanets() {
  const res = await fetch(`${API_URL}/planets`);
  return res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${API_URL}/launches`);
  const launches = await res.json();
  return launches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return  fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(launch)
    });
  } catch (e) {
    return {
      ok : false
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    return fetch(`${API_URL}/launches/${id}`, {
      method: "delete"
    })
  } catch (e) {

  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};