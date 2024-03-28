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
export const deleteStudent = (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};
