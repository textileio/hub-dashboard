import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../store/Context";
import styled from "styled-components";
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
  const [state, actions] = useContext(Context);
  const { threadId } = useParams<any>();

  useEffect(() => {
    actions.fetchThread(threadId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {state.user.threads
        ? state.user.threads.map((thread: any) => (
            <div key={thread.id + 1}>
              <h4>{thread.name}</h4>
              <CodeBox>{thread.schema}</CodeBox>
              <CodeBox> {thread.readfilter}</CodeBox>
              <CodeBox> {thread.writevalidator}</CodeBox>
            </div>
          ))
        : null}
    </div>
  );
};

export default EditThread;
