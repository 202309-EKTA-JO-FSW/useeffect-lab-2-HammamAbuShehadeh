export default function UserCard({name , username, avatar}) {
  //console.log(name, username, avatar);
  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>
        <h5> Name:{name}</h5>

        <p> Username:{username} </p>
      </div>
    </div>
  );
}
