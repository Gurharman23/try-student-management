const url = "http://localhost:8000/students";
export const getStudents = () => {
  return fetch(url).then((response) => response.json());
};
