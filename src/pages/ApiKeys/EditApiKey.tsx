import { useState, FormEvent, useContext } from "react";
import Context from "../../store/Context";
import { useParams } from "react-router";
import { OrgInterface } from "../../components/Utils";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../components/Buttons";
import { KeyType } from "../../store/State";
import { DocsButton } from "../../components/Buttons";

const EditApiKey = () => {
  const [keyType, setKeyType] = useState<string>("account");
  const [keySecurity, setKeySecurity] = useState<string>("insecure");
  const [state, actions] = useContext(Context);
  const { currentOrganization } = useParams<OrgInterface>();
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const type = keyType === "account" ? KeyType.ACCOUNT : KeyType.USER;
    const secure = keySecurity === "secure";
    const org =
      currentOrganization === state.user.sessionInfo?.username
        ? ""
        : currentOrganization;
    actions.createKey(type, secure, org, (_keyInfo, err) => {
      if (err) {
        console.error(err);
        return;
      }
      history.push("keys");
    });
  };

  return (
    <div>
      <h1>Create new Key</h1>
      <p>
        You can use insecure keys creating non-signing keys.
        <br /> These keys are meant to use during development only.
        <br />
        Read the tutorial on development mode to use these keys.
      </p>
      <a
        href="https://docs.textile.io/hub/apis/"
        target="_blank"
        rel="noreferrer"
      >
        <DocsButton>Learn more about API Keys</DocsButton>
      </a>
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
        <p>Select security:</p>
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
