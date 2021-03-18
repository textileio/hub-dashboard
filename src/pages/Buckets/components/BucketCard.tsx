import styled from "styled-components";
import Moment from "react-moment";
import { Link, useRouteMatch } from "react-router-dom";
import { InvertedDefaultButton, Card } from "../../../components";
import { OrgInterface } from "../../../components/Utils";
import { Copy as CopyIcon, World } from "@styled-icons/boxicons-regular";

import { typescale, primaryFont, primaryFontBold } from "../../../utils";

const BucketCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const QuickActionButton = styled(InvertedDefaultButton)`
  width: 40px;
  height: 40px;
  padding: 4px;
  svg {
    max-width: 20px;
  }
`;

const BucketCardName = styled(Link)`
  font-size: ${typescale.desktop.heading4};
  font-family: ${primaryFontBold};
`;

const BucketCardTime = styled.div`
  font-size: ${typescale.desktop.small};
  font-family: ${primaryFontBold};
  display: flex;
  justify-content: space-between;
  small {
    font-family: ${primaryFont};
    text-transform: uppercase;
    color: ${({ theme }) => theme.neutral600};
  }
`;

const BucketCardActions = styled.div``;

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
      <BucketCardName
        to={`/${match?.params.currentOrganization}/bucketview/${publicKey}`}
      >
        {name}
      </BucketCardName>

      <BucketCardTime>
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
      </BucketCardTime>
      <BucketCardActions>
        <QuickActionButton
          onClick={() => {
            navigator.clipboard.writeText(path);
          }}
        >
          <CopyIcon />
        </QuickActionButton>
        <a
          target="_blank"
          rel="noreferrer"
          href={"http://127.0.0.1:8006" + path}
        >
          <QuickActionButton>
            <World />
          </QuickActionButton>
        </a>
        <div>
          {/* <div>{path}</div>
        <div>{publicKey}</div>
        <div>{thread}</div> */}
        </div>
      </BucketCardActions>
    </BucketCardContainer>
  );
};
export default BucketCard;
