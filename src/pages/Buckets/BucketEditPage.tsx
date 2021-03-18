import { useContext, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Context from "../../store/Context";
import Moment from "react-moment";

import { BackButton, Card, CodeInput } from "../../components/";
import { DefaultButton } from "../../components/Buttons";
import BucketTopMenu from "./components/BucketTopMenu";
import { ArrowRight } from "@styled-icons/bootstrap/";
import { OrgInterface } from "../../components/Utils";

const BucketViewContainer = styled.div`
  width: 100%;
`;

const BucketInformation = styled(Card)`
  border: 1px solid ${({ theme }) => theme.neutral400};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
`;

const BucketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThreadLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  svg {
    max-width: 20px;
  }
`;

const BucketStatus = styled.div`
  h4 {
    margin: 0;
  }
  b {
    font-size: 14px;
  }
  word-wrap: break-word;
`;

const FilecoinModule = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.neutral400};
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 16px;
`;

const BucketView = () => {
  const [state, actions] = useContext(Context);
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");

  const { bucketKey } = useParams<{ bucketKey: string }>();
  const [selectedBucket] =
    state.user.buckets.filter((bucket: any) => bucket.key === bucketKey) ?? [];

  useEffect(() => {
    actions.fetchBuckets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BucketViewContainer>
      <BackButton url="buckets" />
      <BucketHeader>
        <div>{selectedBucket ? <h1>{selectedBucket.name}</h1> : null}</div>
        <div>
          <DefaultButton big>View Gateway</DefaultButton>
        </div>
      </BucketHeader>
      <BucketTopMenu />

      {selectedBucket ? (
        <BucketInformation>
          <BucketStatus>
            <h4>General information</h4>
            <div>Path: {selectedBucket.key}</div>
            <CodeInput code={selectedBucket.key} />

            <ThreadLink
              to={{
                pathname: `/${match?.params.currentOrganization}/threads/${selectedBucket.thread}`,
              }}
            >
              View Thread <ArrowRight />
            </ThreadLink>
            <div>
              Created:
              <Moment unix format="YYYY/MM/DD">
                {selectedBucket.createdAt / 10 ** 9}
              </Moment>
            </div>
            <div>
              Updated:
              <Moment unix format="YYYY/MM/DD">
                {selectedBucket.updatedAt / 10 ** 9}
              </Moment>
            </div>
          </BucketStatus>
        </BucketInformation>
      ) : null}

      <FilecoinModule>
        Create a filecoin Archive Learn More
        <DefaultButton>Create Filecoin Archive</DefaultButton>
      </FilecoinModule>
    </BucketViewContainer>
  );
};

export default BucketView;
