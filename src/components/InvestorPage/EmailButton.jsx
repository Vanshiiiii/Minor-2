import React from 'react';

import authContext from "../../utils/auth-hook";

function EmailButton() {
  const auth = authContext;
  const subject = 'Hello';
  const body = 'How are you doing?';

  const handleEmailClick = () => {
    const email = auth.currentUser.email;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <button onClick={handleEmailClick}>Click here to send an email</button>
  );
}

export default EmailButton;
