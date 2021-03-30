import React from "react";
import "../contact.css";
const online = false;

function Contact() {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src="https://zupimages.net/up/21/13/ej5c.jpg"
                alt="avatar"
            />
            <div>
                <h3 className="name">Fatman Scoop</h3>
                <div className="container">
                    <div className="status">
                        {online ? (
                            <span class="status-online"></span>
                        ) : (
                            <span class="status-offline"></span>
                        )}
                    </div>
                    <p className="status-text">
                        {online ? "Online" : "Offline"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
