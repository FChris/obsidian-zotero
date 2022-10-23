export const enum Availablity {
  checking,
  unknown,
  yes,
  no,
}

import Admonition from "@theme/Admonition";
import React from "react";

export interface AvailablityTagProps<I> {
  available: Availablity;
  info?: I | null;
  infoComponent: React.FC<{ info: I | null; beta?: boolean }>;
}

export const LoadingInfo = () => (
  <Admonition type="info">Loading Download Info...</Admonition>
);

export const AvailablityTag = <I,>({
  available,
  infoComponent,
  info,
}: AvailablityTagProps<I>) => {
  switch (available) {
    case Availablity.checking:
      return <LoadingInfo />;
    case Availablity.yes:
    case Availablity.unknown: {
      return infoComponent({ info });
    }
    case Availablity.no:
      return (
        <Admonition type="caution">This method is not yet available</Admonition>
      );
    default:
      break;
  }
};
