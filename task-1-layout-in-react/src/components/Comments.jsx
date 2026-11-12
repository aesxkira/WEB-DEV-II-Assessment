
const comments = [
  {
    username: "soundseeker92",
    message:
      "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?",
  },
  {
    username: "Ted Baker",
    message:
      "I've been following the label for years—so glad someone's finally writing about their impact.",
  },
  {
    username: "Queen_of_noise",
    message:
      "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories of my friends and me listening together. A bit too poetic for my taste, but still compelling.",
  },
];

function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <h4>{comment.username}</h4>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
