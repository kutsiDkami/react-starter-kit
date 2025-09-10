import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

import React from "react";

function Bootstrap(e) {
  const { name, Department, Salary } = e;

  // let User = [
  //   {
  //     id: 0,
  //     name: "atSempai",
  //     Department: "editör",
  //     Salary: "3000",
  //   },
  //   {
  //     id: 1,
  //     name: "kutsi",
  //     Department: "Bilişim",
  //     Salary: "4000",
  //   },
  //   { id: 2, name: "kutsi", Department: "Yönetici", Salary: "5000" },
  // ];
  //   const UserApps = User.map((user) => (
  //     <div key={user.id}>
  //       <div className="col-md-8 mb-4">
  //         <div className="card-header d-flex justify-content-between align-items-center">
  //           <h4>User</h4>
  //         </div>{" "}
  //         <div className="card-body">
  //           <p className="card-text">Department: {user.Department} </p>
  //           <p className="card-text">Salary:  {user.Salary}</p>
  //           <button   variant="secondary">add</button>
  //         </div>
  //       </div>
  //     </div>
  //   ));
  // Tüm bunlar güzel deneme idi ama bostrap arry içine etki etmiyor. çalışmıyor

  const [show, setShow] = React.useState(false);
  const [AlertText, setAlertText] = React.useState("alert text");
  return (
    <div>
      {/* {UserApps} üstteki kodun bir parçası */}

      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h4>User App</h4>
            <i className="bi bi-trash3" style={{ cursor: "pointer" }}></i>
          </div>

          <div className="card-body">
            {" "}
            <p className="card-text">Ad: {name}</p>
            <p className="card-text">Department: {Department}</p>
            <p className="card-text">Salary: {Salary}</p>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(!show);
                //console.log(show); değer kontrolü
                setAlertText(
                  //"butona tıklandı" + " " + Math.floor(Math.random() * 10 + 1) farklı yapı denemesi
                  "buttona bastın" !== AlertText ? "buttona bastın" : "bye bye"
                );
              }}
            >
              denem
            </Button>
          </div>
        </div>
      </div>
      <Alert
        show={show}
        variant="success"
        className="w-50 position-absolute  end-0 bottom-0 "
      >
        {AlertText}
      </Alert>
    </div>
  );
}

export default Bootstrap;
