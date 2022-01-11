import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import AuthContext from "../contexts/AuthContext";

function MyMessages() {
  const [messages, setMessages] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [conversationId, setConversationId] = useState(0);
  let currentMessagingUser = "";
  let navigate = useNavigate();
  const { token, email } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/login",
      });
    }
  }, [token, navigate]);

  const url = `https://apifindhome.seyhanakifov.com/api/Property/GetConversations?recipientEmail=${email}`;
  const [items, error, isLoaded] = useFetch(url, token);

  const SendMessage = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let message = formData.get("message");
	let recipientEmail = messages[0].senderEmail == email ? messages[0].recipientEmail : messages[0].senderEmail;
    await fetch(`https://apifindhome.seyhanakifov.com/api/Property/SendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
		senderName: email,
        senderEmail: email,
        recipientEmail: recipientEmail,
        propertyId: messages[0].propertyId,
        description: message,
      }),
    }).then((res) => res.json());

    setIsChanged(true);
  };

  useEffect(() => {
    if (isChanged !== false) {
      GetMessages(conversationId);
      
    }
  }, [isChanged]);

  const GetMessages = (e) => {
    let id = 0;
    if (isChanged) {
      id = e;
    } else {
      e.preventDefault();
      id = e.currentTarget.value;
    }

    fetch(
      `https://apifindhome.seyhanakifov.com/api/Property/GetRecipientMessages?conversationId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });

    setIsChanged(false);
    setConversationId(id);
	
  };

  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section className="our-dashbord dashbord bgc-f7 pb50">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
              <div className="col-lg-9 col-xl-10 maxw100flex-992">
                <div className="row">
                  <div className="col-lg-12 mb10">
                    <div className="breadcrumb_content style2">
                      <h2 className="breadcrumb_title">Message</h2>
                      <p>We are glad to see you again!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-xl-4">
                    <div className="message_container">
                      <div className="inbox_user_list">
                        <div className="iu_heading">
                          
                        </div>
                        <ul>
                          {items.map((item) => (
                            <li
                              className="contact"
                              value={item.id}
							 key={item.recipientEmail}
                              onClick={GetMessages}
                            >
                              <a href="#">
                                <div className="wrap">
                                  
                                  <img
                                    className="img-fluid"
                                    src="images/team/s1.jpg"
                                    alt="s1.jpg"
                                  />
                                  <div className="meta">
                                    <h5 className="name">{item.recipientEmail == email ? item.senderEmail : item.recipientEmail}</h5>
                                    <p className="preview">{item.description}</p>
                                  </div>
                                  
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-8">
                    <div className="message_container">
                      <div className="user_heading">
                        <a href="#">
                          <div className="wrap">
                            <span className="contact-status online"></span>
                            <img
                              className="img-fluid"
                              src="images/team/s5.jpg"
                              alt="s5.jpg"
                            />
                            <div className="meta">
                              <h5 className="name">{messages.length > 0 ? (messages[0].recipientEmail == email ? messages[0].senderEmail: messages[0].recipientEmail) : "" }</h5>
                              <p className="preview">was online today at 11:43</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="inbox_chatting_box">
                        <ul className="chatting_content">
                          {messages.map((item) => (
                            <li
                              className={
                                item.senderEmail == email
                                  ? "media sent"
                                  : "media reply"
                              }
                            >
                              
                              <img
                                className="img-fluid align-self-start mr-3"
                                src="images/team/s6.jpg"
                                alt="s6.jpg"
                              />
                              <div className="media-body">
                                <div className="date_time">{item.date.toString().slice(5, 19)}</div>
                                <p>{item.description}</p>
                              </div>
                            </li>
                          ))}
                          
                        </ul>
                      </div>
                      <div className="mi_text">
                        <div className="message_input">
                          <form className="form-inline" onSubmit={SendMessage}>
                            <input
                              className="form-control"
                              id="message"
                              name="message"
                              type="search"
                              placeholder="Enter text here..."
                              aria-label="Search"
                            />
                            <button className="btn" type="submit">
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt50">
                  <div className="col-lg-12">
                    <div className="copyright-widget text-center">
                      <p>© 2020 Find House. Made with love.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyMessages;
