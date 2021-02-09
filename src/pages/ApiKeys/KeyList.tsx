import styled from "styled-components";
import { space, typescale } from "../../utils/";
import KeyItem from "./KeyItem";

const KeyTable = styled.table`
  padding: 10px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  border-collapse: collapse;
  thead {
    text-transform: uppercase;
    color: ${({ theme }) => theme.neutral700};
    font-size: ${typescale.desktop.small};
  }
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.neutral400};
  }
  td,
  th {
    max-width: 200px;
    padding: ${space[2]};
    &:last-child {
      text-align: right;
    }
  }
`;

interface KeyListProps {
  typeFilter: "usergroup" | "account";
  keys: any[];
}

const KeyList = ({ keys, typeFilter }: KeyListProps) => {
  return (
    <KeyTable>
      <thead>
        <tr>
          <th>publicKey</th>
          <th>secret</th>
          <th>secure</th>
          <th>valid</th>
          <th>threads</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {keys
          .filter((element) => element.type === typeFilter)
          .map(({ ...props }) => (
            <KeyItem {...props} key={props.publicKey} />
          ))}
      </tbody>
    </KeyTable>
  );
};

export default KeyList;
