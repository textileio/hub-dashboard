import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { space, primaryFontBold } from "../../utils";
import Context from "../../store/Context";
import { DefaultButton, DocsButton } from "../../components/Buttons";

const ThreadsPanelContainer = styled.div`
  width: 100%;
`;

const ThreadCard = styled.div`
  border: 1px solid ${({ theme }) => theme.neutral300};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${space[2]};
  margin: ${space[3]} 0;
`;

const ThreadCardInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ThreadCardName = styled.div`
  min-width: 30%;
  font-family: ${primaryFontBold};
`;

const ThreadCardId = styled.div`
  background-color: ligthgray;
`;

const ThreadCardEditButton = styled(Link)`
  margin-left: ${space[2]};
`;

const ThreadsPanel = () => {
  const [state, actions] = useContext(Context);
  useEffect(() => {
    actions.fetchThreads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThreadsPanelContainer>
      <h1>Manage Threads</h1>
      <DocsButton>Learn more about Threads</DocsButton>
      <p>
        ThreadDB is a multi-party database built on IPFS and Libp2p <br />
        that provides an alternative architecture for data on the web.
      </p>
      <hr />
      <div>
        {state.user.threads
          ? state.user.threads.map((thread: any) => (
              <ThreadCard key={thread.id}>
                <ThreadCardInfo>
                  <ThreadCardName>
                    {thread.name ? thread.name : "Unknown"}
                  </ThreadCardName>
                  <ThreadCardId>{thread.id}</ThreadCardId>
                </ThreadCardInfo>
                <ThreadCardEditButton to={`threads/${thread.id}`}>
                  <DefaultButton>View</DefaultButton>
                </ThreadCardEditButton>
              </ThreadCard>
            ))
          : []}
      </div>
    </ThreadsPanelContainer>
  );
};

export default ThreadsPanel;
