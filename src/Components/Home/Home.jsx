import React from "react";
import useIntance from "../../Hooks/useAuth";

const Home = () => {
  const intance = useIntance();

  const handleForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newUsers = {
      title: name,
      photoURL: photo,
      user_email: email,
      user_password: password,
    };

    console.log(name, photo, email, password);

    intance.post("/products", newUsers).then((data) => {
      console.log(data.data);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleForm}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Email"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
