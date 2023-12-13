import React from "react";
const CreateContext = React.createContext({
  // token: "",
  // email: "",
  // name: "",
  // photourl: "",
  // isLoggedIn: false,
  expensedata: [],
  addExpnse: (item) => {},
  deleteExpense: (id) => {},
  editExpense: (items) => {},
  // setToken: (token) => {},
  // setTokenout: () => {},
});
export default CreateContext;
