import { useState, FormEvent } from "react";
import { PrimaryButton } from "../../components/Buttons";

const EditApiKey = () => {
  const [keyType, setKeyType] = useState<string>("account");
  const [keySecurity, setKeySecurity] = useState<string>("insecure");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO
    console.log("key should be" + keyType, keySecurity);
  };

  return (
    <div>
      <h1>Create new Key</h1>
      <p>Select key type:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            id="account"
            name="keytype"
            value="account"
            checked={keyType === "account"}
            onChange={(e) => setKeyType(e.target.value)}
          />
          <label htmlFor="account">Account</label>
          <input
            type="radio"
            id="usergroup"
            name="keytype"
            value="usergroup"
            checked={keyType === "usergroup"}
            onChange={(e) => setKeyType(e.target.value)}
          />
          <label htmlFor="usergroup">User Group</label>
        </div>
        <p>Select Security:</p>
        <div>
          <input
            type="radio"
            id="insecure"
            name="keysecurity"
            value="insecure"
            checked={keySecurity === "insecure"}
            onChange={(e) => setKeySecurity(e.target.value)}
          />
          <label htmlFor="insecure">Insecure</label>
          <input
            type="radio"
            id="secure"
            name="keysecurity"
            value="secure"
            checked={keySecurity === "secure"}
            onChange={(e) => setKeySecurity(e.target.value)}
          />
          <label htmlFor="secure">Secure</label>
        </div>
        <PrimaryButton type="submit">Create Key</PrimaryButton>
      </form>
    </div>
  );
};

export default EditApiKey;
