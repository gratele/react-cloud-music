import React from "react";
import { renderRoutes } from "react-router-config";
import Player from "../application/Player/index";

function PlayLayout(props) {
  const { route } = props;

  return (
    <div>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(PlayLayout);
