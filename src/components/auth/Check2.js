import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Check2() {
    const userData=["aaaa","bbbb","cccc","dddd","eeee"];
 
  const [users, setUsers] = useState(new Set());

  function createUserList() {
      
    return userData.map((user, key) => (
        
        <Form.Check
        disabled={users.size > 2 && !users.has(user)}
        key={key}
        value={user}
        label={user}
        onChange={onChange}
      />
      
  
    ));
  }
  // const handleChange = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempUser = users.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setUsers(tempUser);
  //    } 
  //   else {
  //       let tempUser = users.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUsers(tempUser);
  //   }
  // };

  function onChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setUsers((c) => new Set([...c, value]));
    } else {
      setUsers((c) => new Set([...c].filter((x) => x !== value)));
    }
  }
   

  return (
     <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
      <h2>Disabled checkbox</h2>
        <h3>Select Users</h3>
        {/*<input
            type="checkbox"
            className="form-check-input"
            name="allSelect" 
            onChange = {handleChange}/>
             <label className="form-check-label ms-2">All Select</label>*/}
             {createUserList()}
       </form>
  </div>
  );
}
