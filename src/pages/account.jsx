import { useEffect, useState } from "react";
import profileImage from "../assets/image1.avif";
function Account() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <div className="container">
      <div className="mobile">
        <div className="account">
          <h2>Account Settings</h2>
          <div className="profile-card">
            <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="profile-info">
              <h3>{user.name || "Marry Doe"}</h3>
              <p>{user.email || "Marry@Gmail.com"}</p>
            </div>
          </div>
          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
