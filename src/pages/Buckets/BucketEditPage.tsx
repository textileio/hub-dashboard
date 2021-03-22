import { useContext, useEffect, useState } from "react";
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";
import styled from "styled-components";
import Context from "../../store/Context";
import Moment from "react-moment";

import { space } from "../../utils";
import {
  BackButton,
  Card,
  CodeInput,
  DangerInvertedButton,
  TextInput,
} from "../../components/";
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
  width: 70%;
  word-wrap: break-word;
  h4 {
    margin: ${space[2]} 0;
  }
  b {
    font-size: 14px;
  }
`;

const BucketPreview = styled(Card)`
  width: 30%;
  margin: 0;
  margin-right: ${space[2]};
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

const BucketDates = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${space[2]};
  margin-top: ${space[2]};
  border-top: 1px solid ${({ theme }) => theme.neutral300};
`;

const BucketDelete = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BucketView = () => {
  const [state, actions] = useContext(Context);
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");
  const history = useHistory();
  const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false);

  const { bucketKey } = useParams<{ bucketKey: string }>();
  const [selectedBucket] =
    state.user.buckets.filter((bucket: any) => bucket.key === bucketKey) ?? [];

  useEffect(() => {
    actions.fetchBuckets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteInput = (BucketName: string) => {
    BucketName === selectedBucket.name
      ? setDeleteEnabled((deleteEnabled) => (deleteEnabled = true))
      : setDeleteEnabled((deleteEnabled) => (deleteEnabled = false));
  };

  const HandleDelete = async () => {
    await actions.deleteBucket(selectedBucket.key);
    history.push("/" + match?.params.currentOrganization + "/buckets");
  };

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
        <>
          <BucketInformation>
            <BucketPreview />
            <BucketStatus>
              <h4>General information</h4>
              <p>{selectedBucket.path}</p>
              <CodeInput code={selectedBucket.key} />
              <ThreadLink
                to={{
                  pathname: `/${match?.params.currentOrganization}/threads/${selectedBucket.thread}`,
                }}
              >
                View Thread <ArrowRight />
              </ThreadLink>
              <BucketDates>
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
              </BucketDates>
            </BucketStatus>
          </BucketInformation>
          <BucketDelete>
            <div>
              <p>Please type the name of the bucket to enable deletion</p>
              <p>Deleted Buckets cannot be recovered</p>
              <TextInput
                type="text"
                placeholder="Bucket Name"
                onChange={(e) => handleDeleteInput(e.target.value)}
              />
            </div>
            {deleteEnabled ? (
              <DangerInvertedButton onClick={HandleDelete}>
                Delete Bucket
              </DangerInvertedButton>
            ) : null}
          </BucketDelete>
        </>
      ) : null}

      <FilecoinModule>
        Create a filecoin Archive Learn More
        <DefaultButton>Create Filecoin Archive</DefaultButton>
      </FilecoinModule>
    </BucketViewContainer>
  );
};

export default BucketView;
