import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs-icon.svg";
import { DefaultButton as Button, DocsButton } from "../../components/Buttons";
import Context from "../../store/Context";
import BucketCard from "./components/BucketCard";
import { Link, useRouteMatch } from "react-router-dom";
import { OrgInterface } from "../../components/Utils";

import SearchBar from "../../components/SearchBar";

const BucketsPageContainer = styled.div`
  width: 100%;
`;

const BucketList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
`;

interface BucketProps {
  createdAt: number;
  key: string;
  name: string;
  path: string;
  thread: string;
  updatedAt: number;
}

const BucketsPanel = () => {
  const [state, actions] = useContext(Context);
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");

  useEffect(() => {
    actions.fetchBuckets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BucketsPageContainer>
      <h1>Manage Buckets</h1>
      <DocsButton>
        Learn more about Buckets
        <DocsIcon />
      </DocsButton>
      <p>
        Unlike traditional cloud services, buckets are built on open,
        <br />
        decentralized protocols including the IPFS and Libp2p.
        <br />
        You can serve websites, data, and apps from buckets.
      </p>
      <Link to={`/${match?.params.currentOrganization}/addbucket`}>
        <Button big>Create Bucket</Button>
      </Link>
      <hr />
      <SearchBar />
      <BucketList>
        {state.user.buckets
          ? state.user.buckets.map(({ ...props }: BucketProps) => {
              return (
                <BucketCard {...props} key={props.path} publicKey={props.key} />
              );
            })
          : []}
      </BucketList>
    </BucketsPageContainer>
  );
};

export default BucketsPanel;
