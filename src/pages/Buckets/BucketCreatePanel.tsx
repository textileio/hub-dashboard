import { FormEvent, useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Context from "../../store/Context";

import { BackButton, Card, DefaultButton, TextInput } from "../../components/";
import { LockClosed, LockOpen } from "@styled-icons/heroicons-outline/";

const BucketCreatePanelContainer = styled.div`
  max-width: 400px;
`;

interface EncryptedBoxProps {
  encrypted?: boolean;
}
const EncryptedBox = styled(Card)<EncryptedBoxProps>`
  transition: all 0.2 s linear;
  ${({ encrypted }: EncryptedBoxProps) =>
    encrypted
      ? css`
          border: 2px solid ${({ theme }) => theme.primaryLight200};
          > div {
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.neutral100};
          }
        `
      : css`
          color: black;
        `}
`;

const EncryptedCheckbox = styled(Card)`
  transition: all 0.2s linear;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    cursor: pointer;
    margin-left: 8px;
  }
  checkbox {
    display: none;
  }
  svg {
    max-width: 24px;
  }
`;

const BucketCreatePanel = () => {
  const [bucketName, setbucketName] = useState<string>("");
  const [encrypted, setEncrypted] = useState<boolean>(false);
  const [, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchThreads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.createBucket(bucketName);
  };

  return (
    <BucketCreatePanelContainer>
      <BackButton url="buckets" />
      <h1>Create Bucket</h1>

      <label htmlFor="bucketName">Bucket Name:</label>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="bucketName"
          placeholder="Name is optional"
          value={bucketName}
          onChange={(e) => setbucketName(e.target.value)}
        />

        <EncryptedBox encrypted={encrypted}>
          The contents of encrypted buckets will still exist on IPFS but the
          contents will be obfuscated to any viewer that doesn't have access to
          the encryption keys.
          <EncryptedCheckbox onClick={() => setEncrypted(!encrypted)}>
            <div>
              <input
                type="checkbox"
                onChange={() => setEncrypted(!encrypted)}
                checked={encrypted}
              />
              <label htmlFor="encrypted">Encrypt Bucket</label>
            </div>
            {encrypted ? <LockClosed /> : <LockOpen />}
          </EncryptedCheckbox>
        </EncryptedBox>
        <hr />
        <DefaultButton big type="submit">
          Create Bucket
        </DefaultButton>
      </form>
    </BucketCreatePanelContainer>
  );
};

export default BucketCreatePanel;
