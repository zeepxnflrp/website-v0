import React from "react";

function Contact() {
  return (
    <div className="container">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="access_key"
        ></input>

        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <textarea name="message" required></textarea>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>
      </form>

      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}

export default Contact;
