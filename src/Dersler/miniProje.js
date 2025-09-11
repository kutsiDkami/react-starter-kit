import { useEffect, useState } from "react";

import "../tailwind.css";

function MiniProje() {
  const [UserId, setUserId] = useState(1);
  const [user, setUser] = useState("şuan boş");
  const [click, setClick] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/users/" + UserId)
      .then((response) => response.json())
      .then((data) => {
        if (data.message && data.message.includes("not found")) {
          // console.log("çalıştı"); kontrol
          setUser({
            firstName: "Böyle bir kullanıcı yok",
            lastName: "bilinmiyor",
            email: "bilinmiyor",
            age: "bilinmiyor",
            phone: "bilinmiyor",
          });
        } else {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [click]);

  return (
    <>
      <div className="bg-yellow-300 w-80 m-8 p-1 rounded ">
        <h1 className="font-bold ">Fake User App</h1>
        <label htmlFor="userId">User Id:</label>
        <br />
        <input
          type="number"
          id="userId"
          onChange={(e) => {
            // console.log(e.target.value); kontrol
            setUserId(e.target.value);
          }}
        />
        <button
          className="bg-gray-100 pl-1 pr-1 "
          //   onClick={(e) => {
          //     console.log(e.target.parentElement.lastChild );
          //   }} deneme kısmı
          onClick={() => {
            setClick(click + 1);
          }}
        >
          Getir
        </button>
        <div className="card  w-72 h-60 bg-red-300 m-1 p-2 rounded">
          <img />
          <h5>Name: {user.firstName}</h5>
          <h6>Last Name: {user.lastName}</h6>
          <h6>Age: {user.age}</h6>
          <h6>Email: {user.email}</h6>
          <h6>Phone: {user.phone}</h6>
        </div>
      </div>
    </>
  );
}

export default MiniProje;
