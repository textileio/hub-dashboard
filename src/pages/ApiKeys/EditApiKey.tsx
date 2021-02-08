import { PrimaryButton } from "../../components/Buttons";

const EditApiKey = () => {
  return (
    <div>
      <h1>Create new Key</h1>
      <p>Select key type:</p>
      <div>
        <input type="radio" id="account" name="gender" value="account" />
        <label htmlFor="account">account</label>
        <input type="radio" id="usergroup" name="gender" value="usergroup" />
        <label htmlFor="usergroup">usergroup</label>
      </div>
      <p>Select Security:</p>
      <div>
        <input type="radio" id="insecure" name="gender" value="insecure" />
        <label htmlFor="insecure">insecure</label>
        <input type="radio" id="secure" name="gender" value="secure" />
        <label htmlFor="secure">secure</label>
      </div>
      <PrimaryButton>Create Key</PrimaryButton>
    </div>
  );
};

export default EditApiKey;
