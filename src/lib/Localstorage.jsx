const initializeLocalStorage = () => {
  const users = [
    {
      email: "employee1@example.com",
      password: "password1",
      role: "karyawan",
    },
    {
      email: "employee2@example.com",
      password: "password2",
      role: "karyawan",
    },
    {
      email: "employee3@example.com",
      password: "password3",
      role: "karyawan",
    },
    { email: "hrd@example.com", password: "passwordHRD", role: "admin" },
  ];

  localStorage.setItem("users", JSON.stringify(users));
};
