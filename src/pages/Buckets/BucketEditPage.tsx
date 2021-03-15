import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { DefaultButton } from "../../components/Buttons";
import BucketTopMenu from "./components/BucketTopMenu";
import { ArrowLeft } from "@styled-icons/heroicons-outline/";
import { LightButton } from "../../components/";
import { OrgInterface } from "../../components/Utils";

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
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");

  return (
    <BucketViewContainer>
      <Link to={`/${match?.params.currentOrganization}/buckets`}>
        <LightButton>
          <ArrowLeft />
          Back to Buckets
        </LightButton>
      </Link>
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
        <BucketInformation>
          <BucketStatus>
            <h4>General information</h4>
            <ul>
              <li>Path:</li>
              <li>Thread:</li>
              <li>Created:</li>
              <li>Updated:</li>
              <li>Filecoin:</li>
              <li>encrypted:</li>
            </ul>
            <BucketEditMenu></BucketEditMenu>
          </BucketStatus>
          <BucketPreview>
            <iframe src="" title="preview"></iframe>
          </BucketPreview>
        </BucketInformation>
      </BucketTab>

      <FilecoinModule>
        Create a filecoin Archive Learn More
        <DefaultButton>Create Filecoin Archive</DefaultButton>
      </FilecoinModule>
    </BucketViewContainer>
  );
};

export default BucketView;
