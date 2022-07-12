import * as React from 'react';
import Form from 'react-bootstrap/Form';

export default function ImputRadio() {
  const [radioArray] = React.useState([
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
  ]);
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
      <Form>
        {radioArray.map((radio, index) => (
          <div>
            <br />
            {/* <Form.Check id={index} type=""/> */}
            <input
              key={index}
              type="radio"
              name="options"
              id={`input-${index}`}
              value={radio}
              onChange={handleChange}
              // checked={index === 0 ? true : false}
            />
            &nbsp;
            <label key={`lbl${index}`} htmlFor={`input-${index}`}>
              {radio}
            </label>
          </div>
        ))}
      </Form>
      <hr />
      <label>{`Selected option: ${JSON.stringify(radio)}`}</label>
    </React.Fragment>
  );
}
