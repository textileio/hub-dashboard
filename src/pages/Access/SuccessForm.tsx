import styled from "styled-components";

const Command = styled.span`
  background-color: ${({ theme }) => theme.accentA};
  padding: 4px 10px;
  color: ${({ theme }) => theme.neutral1000};
  border-radius: 4px;
`;

const Step = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const UsefulLinks = styled.ol`
  padding: 0;
  list-style-type: none;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    margin: 15px 0;
    width: 100%;
  }
`;

const SuccessForm = () => {
  return (
    <div>
      <h1>Account created</h1>
      <p className="announcement">
        Your account has been successfully created!
      </p>
      <p className="announcement">
        <b>Next Steps:</b>
      </p>
      <UsefulLinks>
        <li>
          <Step>1</Step>
          <div>
            Download the{" "}
            <a
              href="https://docs.textile.io/hub/accounts/"
              rel="noreferrer"
              target="_blank"
            >
              Hub CLI →
            </a>
          </div>
        </li>
        <li>
          <Step>2</Step>
          <div>
            use <Command>hub login</Command> to get started.
          </div>
        </li>
        <li>
          <Step>3</Step>
          <div>
            Read the{" "}
            <a href="https://docs.textile.io/" rel="noreferrer" target="_blank">
              docs →{" "}
            </a>{" "}
            and start building!
          </div>
        </li>
      </UsefulLinks>
    </div>
  );
};

export default SuccessForm;
