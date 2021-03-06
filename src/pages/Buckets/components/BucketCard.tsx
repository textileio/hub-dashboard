import styled from "styled-components";
import { DefaultButton } from "../../../components/Buttons";
import {
  borderRadius,
  primaryFontBold,
  space,
  typescale,
} from "../../../utils";

const BucketCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.neutral400};
  border-radius: ${borderRadius.default};
  margin: ${space[4]} 0;
`;
const BucketActions = styled.div`
  button {
    margin-left: ${space[2]};
  }
`;

const BucketCardHeader = styled.div`
  padding: ${space[2]};
  background-color: ${({ theme }) => theme.neutral200};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BucketCardName = styled.div`
  color: ${({ theme }) => theme.primary};
  font-family: ${primaryFontBold};
  font-size: ${typescale.desktop.heading5};
  background-color: ${({ theme }) => theme.neutral200};
`;

const BucketCardBody = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  border-top: 1px solid ${({ theme }) => theme.neutral300};
  padding: ${space[2]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BucketCardFooter = styled.div`
  padding: ${space[1]};
  font-size: ${typescale.desktop.small};
  span {
    margin: 0 10px;
    text-transform: uppercase;
    small {
      color: ${({ theme }) => theme.neutral800};
    }
  }
`;

// const BucketItem;

interface BucketCardProps {
  createdAt: number;
  pubKey: string;
  name: string;
  path: string;
  thread: string;
  updatedAt: number;
}

const BucketCard = ({
  createdAt,
  pubKey,
  name,
  path,
  thread,
  updatedAt,
}: Omit<BucketCardProps, "key"> & { pubKey: string }) => {
  return (
    <BucketCardContainer>
      <BucketCardHeader>
        <BucketCardName>{name}</BucketCardName>
        <BucketActions>
          <DefaultButton
            onClick={() => {
              navigator.clipboard.writeText(path);
            }}
          >
            Copy #
          </DefaultButton>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href={"http://127.0.0.1:8006" + path}
          >
            <DefaultButton>Gateway</DefaultButton>
          </a>
          <Link to={`/${match?.params.currentOrganization}/bucketview`}>
            <DefaultButton>Edit Bucket</DefaultButton>
          </Link> */}
        </BucketActions>
      </BucketCardHeader>
      <BucketCardBody>
        <div>{path}</div>
        <div>{pubKey}</div>
        <div>{thread}</div>
      </BucketCardBody>
      <BucketCardFooter>
        <span>
          <small>Created: </small>
          {createdAt}
        </span>
        <span>
          <small>Edited: </small>
          {updatedAt}
        </span>
      </BucketCardFooter>
    </BucketCardContainer>
  );
};
export default BucketCard;
