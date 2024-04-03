import { Student } from "./types";

const url = "http://localhost:8000/students";
export const fetchStudents = async () => {
  const response = await fetch(url);
  return await response.json();
};
export const createStudent = async (user: Student) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await res.json();
};
export const deleteStudent = async (id: string | number) => {
  const res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return await res.json();
};
