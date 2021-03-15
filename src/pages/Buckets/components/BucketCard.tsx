import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
// import { DefaultButton } from "../../../components/Buttons";
import { OrgInterface } from "../../../components/Utils";
import Moment from "react-moment";
import { DefaultButton } from "../../../components";
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
  :hover {
    text-decoration: underline;
  }
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
    padding-right: 20px;
    margin: 0 10px;
    small {
      font-size: 11px;
      margin-right: 5px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.neutral800};
    }
  }
`;

// const BucketItem;

interface BucketCardProps {
  createdAt: number;
  publicKey: string;
  name: string;
  path: string;
  thread: string;
  updatedAt: number;
}

const BucketCard = ({
  createdAt,
  publicKey,
  name,
  path,
  thread,
  updatedAt,
}: BucketCardProps) => {
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");

  return (
    <BucketCardContainer>
      <BucketCardHeader>
        <BucketCardName>
          <Link to={`/${match?.params.currentOrganization}/bucketview`}>
            {name}
          </Link>
        </BucketCardName>
        <BucketActions>
          <DefaultButton
            onClick={() => {
              navigator.clipboard.writeText(path);
            }}
          >
            Copy #
          </DefaultButton>
          <a
            target="_blank"
            rel="noreferrer"
            href={"http://127.0.0.1:8006" + path}
          >
            <DefaultButton>Gateway</DefaultButton>
          </a>
        </BucketActions>
      </BucketCardHeader>
      <BucketCardBody>
        <div>{path}</div>
        <div>{publicKey}</div>
        <div>{thread}</div>
      </BucketCardBody>
      <BucketCardFooter>
        <span>
          <small>Created: </small>
          <Moment unix format="YYYY/MM/DD">
            {createdAt / 10 ** 9}
          </Moment>
        </span>
        <span>
          <small>Edited: </small>
          <Moment unix format="YYYY/MM/DD">
            {updatedAt / 10 ** 9}
          </Moment>
        </span>
      </BucketCardFooter>
    </BucketCardContainer>
  );
};
export default BucketCard;
