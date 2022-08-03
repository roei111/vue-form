const inputs = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    validation: "required|alpha|min:2|max:12",
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    validation: "required|alpha|min:2|max:15",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    validation: "required|email",
  },
  {
    type: "select",
    name: "prefix",
    label: "Phone number",
    options: ["050", "052", "054"],
  },
  {
    type: "text",
    name: "phoneNumber",
    validation: "required|number|matches:/^[0-9]{7}$/",
    validationMessages: { matches: "Phone number must be exactly 7 digits" },
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    validation:
      "required|matches:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])([a-zA-Z0-9~!@#$%^&*]+)$/",
    validationMessages: {
      matches:
        "Passwords must include letters, numbers and special characters.",
    },
  },
  {
    type: "submit",
  },
];

export default inputs;
