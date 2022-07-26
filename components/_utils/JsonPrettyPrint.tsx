import * as React from 'react';

export default function JsonPrettyPrint(props: any) {
  return <React.Fragment>{JSON.stringify(props, undefined, 2)}</React.Fragment>;
}
