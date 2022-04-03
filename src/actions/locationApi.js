export async function locationApi() {
  const res = await fetch("http://localhost:5000/api/v1/locations").then(
    (res) => res.json()
  );
  return { data: res };
}

export async function crowdPoint() {
  const res = await fetch("http://localhost:5000/api/v1/crowd_point").then(
    (res) => res.json()
  );

  return { data: res };
}
