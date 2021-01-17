import React, { PropsWithChildren } from 'react';

export default function BoardColumn({ children }: PropsWithChildren<unknown>) {
  return <div className="rounded bg-grey-light w-64 p-2">{children}</div>;
}
