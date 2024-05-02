export const EmailTemplate = (data: any) => {
  const { username, email, subject, message } = data;

  return `
      <div>
        <h1>Welcome, Hari!</h1>
        <h3>GuFu - Good Food</h3>
        <h3>
          You have a hear from ${username} : ${email}
        </h3>
        <h4>Subject :  ${subject}</h4>
        <p>${message}</p>
      </div>`;
};
