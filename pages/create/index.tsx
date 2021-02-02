import React from "react";

export default function Create() {
  const [cards, setCards] = React.useState({ cards: [{ title: "Title" }] });
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    // fetch("http://localhost:3000/api/cards")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setCards({ cards: [...res.cards] });
    //   });
    return () => {};
  }, []);
  const handleTitleChange = (evt: any) => {
    setTitle(evt.target.value);
  };
  const handleDescriptionChange = (evt: any) => {
    setDescription(evt.target.value);
  };
  const handleLoading = () => {
    setLoading(true);
    fetch("http://localhost:3000/api/cards")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setCards({ cards: [...res.cards] });
        setLoading(false);
      });
  };
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    fetch("http://localhost:3000/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Create page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleTitleChange} />
        <input type="text" onChange={handleDescriptionChange} />
        <input type="submit" />
      </form>
      <button onClick={handleLoading}>Api</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        cards.cards.map((card) => {
          return <p key={card.title}>{card.title}</p>;
        })
      )}
    </div>
  );
}
