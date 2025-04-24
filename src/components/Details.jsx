"use client";

import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { AuthContext } from "../contexts/AuthContext";
import "../Styles/Details.css";


function Details() {
  const router = useRouter();
  const { id } = useParams(); // Get the dynamic route parameter
  const { user } = useContext(AuthContext);
  const token = user?.token || null;
  const email = user?.email || null;

  const [isLiked, setIsLiked] = useState(false);
  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    fetch(`https://localhost:44382/api/Home/GetWithId?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          data.likes.includes(email) ? setIsLiked(true) : setIsLiked(false);
          setProperty(data);
          setIsLoaded(true);

          if (data.status === "Not Found") {
            router.push("/notFound");
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch(() => {
        router.push("/notFound");
      });
  }, [id, token, email, router]);

  const SendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");
    const senderEmail = formData.get("email");
    const senderName = formData.get("name");

    await fetch(`https://localhost:44382/api/Property/SendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        senderName,
        senderEmail,
        recipientEmail: property.creator,
        propertyId: id,
        description: message,
      }),
    }).then((res) => res.json());

    const sendInfo = document.getElementById("sendMessage");
    sendInfo.style.color = "green";
    sendInfo.style.display = "block";
  };

  const OnDelete = async (e) => {
    e.preventDefault();

    await fetch(`https://localhost:44382/api/Home/DeleteWithId?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Not Found") {
          router.push("/notFound");
        }
      });

    router.push("/home");
  };

  const OnLike = async (e) => {
    e.preventDefault();

    if (email === property.creator || property.likes.includes(email)) {
      router.push("/notFound");
      return;
    }

    await fetch(`https://localhost:44382/api/Home/UserLike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: email,
        propertyId: id,
      }),
    }).then((res) => res.json());

    setIsLiked(true);
    router.push(`/details/${id}`);
  };

  const OnUnlike = async (e) => {
    e.preventDefault();

    if (email === property.creator || !property.likes.includes(email)) {
      router.push("/notFound");
      return;
    }

    await fetch(`https://localhost:44382/api/Home/UserUnlike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: email,
        propertyId: id,
      }),
    }).then((res) => res.json());

    setIsLiked(false);
    router.push(`/details/${id}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="our-agent-single pb30-991" ref={divRef}>
        <div className="container">
          <div className="row" id="myDetails">
            <div className="col-md-12 col-lg-8">
              <div className="listing_single_description">
                <img
                  className="img-whp"
                  src={property.imageUrl}
                  alt="house.jpg"
                />
                <h1>{property.title}</h1>
                <p>{property.description}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <form onSubmit={SendMessage}>
                <h4>Contact {property.creator}</h4>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" defaultValue={email} />
                <textarea name="message" placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
                <span id="sendMessage" style={{ display: "none" }}>
                  Message sent!
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
