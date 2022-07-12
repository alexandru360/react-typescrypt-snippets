import * as React from 'react';

export default function TestComponent() {
  const [unu, setUnu] = React.useState({
    unu: '',
    doi: '',
  });

  React.useEffect(() => {
    const doi = 'modificat';
    setUnu({ ...unu, doi: doi });
  }, []);

  return <React.Fragment></React.Fragment>;
}
