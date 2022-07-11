import * as React from 'react';

export default function ImputRadio() {
  const [radioArray] = React.useState(['option1', 'option2', 'option3']);
  const [radio, setRadio] = React.useState<any | null>(null);

  React.useEffect(() => console.info('radio', radio), [radio]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setRadio({ [name]: value });
  };

  return (
    <React.Fragment>
      <h3>ImputRadio</h3>
      <h5>How can I work with Radio "buttons" (Options groupped together)</h5>
      <br />
      {radioArray.map((radio, index) => (
        <div>
          <br />
          <input
            key={index}
            type="radio"
            name="options"
            id={`input-${index}`}
            value={radio}
            onChange={handleChange}
            // checked={index === 0 ? true : false}
          />
          <label key={`lbl${index}`} htmlFor={`input-${index}`}>
            {radio}
          </label>
        </div>
      ))}
      <hr />
      <label>{`Selected option: ${JSON.stringify(radio)}`}</label>
    </React.Fragment>
  );
}
