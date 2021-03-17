import { Link, useRouteMatch } from "react-router-dom";
import { OrgInterface } from "../components/Utils";

import { ArrowLeft } from "@styled-icons/heroicons-outline/";
import { LightButton } from "../components";

interface BackButtonProps {
  url: string;
  text?: string;
}

export const BackButton = ({ url, text }: BackButtonProps) => {
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");

  return (
    <Link to={`/${match?.params.currentOrganization}/${url}`}>
      <LightButton>
        <ArrowLeft />
        {text ? text : "Back to " + url}
      </LightButton>
    </Link>
  );
};
