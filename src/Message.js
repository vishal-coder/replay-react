function Message(props) {
  const students = [
    {
      name: "user1",
      imgSource:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU",
    },
    {
      name: "user2",
      imgSource:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPkdAxAZgNP161H5KEGNUGFjSnkKkvXjsLg&usqp=CAU",
    },
  ];
  return (
    <div>
      <img className="profile-pic" src={props.user.imgSource} alt="no image" />
      {/* <h1>Hi, {props.user.name}</h1> */}
    </div>
  );
}
