import { useContext, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { LightButton } from "../../components/";
import Context from "../../store/Context";
import { ArrowLeft } from "@styled-icons/heroicons-outline/";
import { OrgInterface } from "../../components/Utils";

const CodeBox = styled.pre`
  padding: 20px;
  background-color: black;
  font-size: 0.8rem;
  white-space: pre-wrap;
  word-wrap: anywhere;
  color: white;
  display: flex;
  width: 100%;
  max-width: 100%;
`;

const EditThread = () => {
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");
  const [state, actions] = useContext(Context);
  const { threadId } = useParams<any>();

  useEffect(() => {
    actions.fetchThread(threadId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Link to={`/${match?.params.currentOrganization}/threads`}>
        <LightButton>
          <ArrowLeft />
          Back to Threads
        </LightButton>
      </Link>
      {state.user.threads
        ? state.user.threads.map((thread: any) => (
            <div key={thread.id + 1}>
              <h4>Name: {thread.name}</h4>
              <h5>Schema</h5>
              <CodeBox>{thread.schema}</CodeBox>
              <h5>Read filter:</h5>
              <CodeBox> {thread.readfilter}</CodeBox>
              <h5>Write validator:</h5>
              <CodeBox> {thread.writevalidator}</CodeBox>
            </div>
          ))
        : null}
    </div>
  );
};

export default EditThread;
