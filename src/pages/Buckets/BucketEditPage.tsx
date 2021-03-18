import Context from "../../store/Context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

import styled from "styled-components";
import { DefaultButton } from "../../components/Buttons";
import BucketTopMenu from "./components/BucketTopMenu";
import { BackButton } from "../../components/";

const BucketViewContainer = styled.div`
  width: 100%;
`;

const BucketInformation = styled.div`
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

const BucketTab = styled.div``;

const BucketStatus = styled.div`
  h4 {
    margin: 0;
  }
  b {
    font-size: 14px;
  }
  width: 60%;
  word-wrap: break-word;
  margin-left: 16px;
`;

const BucketPreview = styled.div`
  width: 40%;
  border: 1px solid ${({ theme }) => theme.neutral500};
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 4px;
  }
`;

const BucketEditMenu = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.neutral300};
  padding-top: 16px;
  width: 100%;
  button {
    margin-right: 10px;
  }
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
        <div>
          <h1>testbuck</h1>
        </div>
        <div>
          <DefaultButton big>View Gateway</DefaultButton>
        </div>
      </BucketHeader>
      <BucketTopMenu />
      <BucketTab>
        {selectedBucket ? (
          <BucketInformation>
            <BucketStatus>
              <h4>General information</h4>
              <ul>
                <li>Path: {selectedBucket.key}</li>
                <li>Thread: {selectedBucket.thread}</li>
                <li>
                  Created:
                  <Moment unix format="YYYY/MM/DD">
                    {selectedBucket.createdAt / 10 ** 9}
                  </Moment>
                </li>
                <li>
                  Updated:
                  <Moment unix format="YYYY/MM/DD">
                    {selectedBucket.updatedAt / 10 ** 9}
                  </Moment>
                </li>
              </ul>
              <BucketEditMenu></BucketEditMenu>
            </BucketStatus>
            <BucketPreview>
              <iframe src="" title="preview"></iframe>
            </BucketPreview>
          </BucketInformation>
        ) : null}
      </BucketTab>

      <FilecoinModule>
        Create a filecoin Archive Learn More
        <DefaultButton>Create Filecoin Archive</DefaultButton>
      </FilecoinModule>
    </BucketViewContainer>
  );
};

export default BucketView;
