import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Project() {
  const [card, setData] = React.useState<any>({ title: "", description: "" });

  const router = useRouter();

  React.useEffect(() => {
    let query = router.query.project;
    if (query) {
      fetch(`http://localhost:3000/api/projects/${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            router.push("/404");
          }
        })
        .then((res) => {
          console.log(res);
          setData(res.card);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {};
  }, [router]);

  return (
    <div>
      <h1>{router.query.project} Project page</h1>
      <Link href="/">Home</Link>
      <form></form>
      <p>{card.title}</p>
      <p>{card.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        {card.cards?.map((card, index) => {
          return (
            <div
              key={index}
              style={{
                width: "120px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
                border: "1px solid red",
                borderRadius: "8px",
                padding: "4px",
              }}
            >
              <img
                src={card?.url}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
              <h4>{card?.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
