import React from "react";

const Mission = () => {
  const missionList = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/v2/D4E12AQEMi9NaS5U06g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691958095088?e=2147483647&v=beta&t=1jdHvE2pgEVXrP12ph9jR8evEAkNgUQ3TbyUQ_dOq4s",
      title: "Empower Through Innovation",
    },
    {
      id: 2,
      img: "https://www.theglobalrecruiter.com/wp-content/uploads/2020/04/global-leader-e1587725129452.jpg",
      title: "Global Recognition",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Continous Improvent",
    },
    {
      id: 4,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Continous Improvent",
    },
    {
      id: 5,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Continous Improvent",
    },
    {
      id: 6,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Continous Improvent",
    },
  ];
  return (
    <>
      <div className="mission">
        <h1>Mission and Vision</h1>
        <div className="row-mission">
          <div className="mission-card">
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">
              Our mission is to empower businesses through innovative, reliable,
              and secure IT solutions that enhance operational efficiency and
              drive digital transformation.
            </p>
          </div>
          <div className="vision-card">
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              Our mission is to empower businesses through innovative, reliable,
              and secure IT solutions that enhance operational efficiency and
              drive digital transformation.
            </p>
          </div>
        </div>
      </div>
      <div className="mission-card-img">
        {missionList.map((item, key) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img src={item.img} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mission;
