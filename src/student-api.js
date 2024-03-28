const url = "http://localhost:8000/students";
export const fetchStudents = () => {
  return fetch(url).then((response) => response.json());
};
export const createStudent = (user) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
