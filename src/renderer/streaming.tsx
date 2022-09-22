import React from "react";

interface IStreamProps {
  url: string;
}

export const StreamPage: React.FC<IStreamProps> = (props) => {
  const content = "0; url = " + props.url;

  return (
    <div>
      <meta httpEquiv="refresh" content={content} />
    </div>
  );
};
