import { useEffect, useState } from "react";
import "../tailwind.css";

function Lifecycle() {
  const [count, setCount] = useState(0);
  const [ApiId, setApiId] = useState(19);
  const [post, setPost] = useState("boş");
  const mockApi = "https://64fc6978605a026163ae77aa.mockapi.io/listTodo/";

  useEffect(() => {
    //  console.log("deneme1 " + count);
    /* her tuş'a basıldığında güncelerler */
  });

  useEffect(
    () => {
      //  console.log("deneme2 " + count);
    },
    [
      /*
    kontrol edilmek istenen değer girilir ve ona göre çalışır
    onun haricinde 
    sadece sayfa ilk baştalıldığında veya yenilendiğinde çalışır
    */
    ]
  );


  useEffect(() => {
    fetch(mockApi + ApiId)
      .then((response) => response.json())
      .then((data) => setPost(data.Todo))
      .catch((error) => console.error("Hata:", error));
  }, [ApiId]);

  return (
    <>
      <div className="w-60 m-8">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-yellow-500 rounded p-1 text-white m-1"
        >
          Göster
        </button>

        <hr />
        <button
          onClick={() => setApiId(19 !== ApiId ? 19 : 30)}
          className="bg-green-500 rounded p-1 text-white m-1"
        >
          Getir
        </button>

        <div>{post}</div>
        <div>{ApiId}</div>
      </div>
    </>
  );
}

export default Lifecycle;
