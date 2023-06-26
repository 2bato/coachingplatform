import './WeightVisualizer.css';

const Plate = ({ color, width, height }) => (
  <div
    style={{
      backgroundColor: color,
      width: `${width}vh`,
      height: `${height}vh`,
      border: '0.1px solid black',
      borderRadius: '1.5px',
    }}
  />
);

export default function WeightVisualizer({ weight }) {
  const plates = [
    { value: 25, color: 'red', width: 0.6, height: 5 },
    { value: 20, color: 'blue', width: 0.6, height: 5 },
    { value: 15, color: 'yellow', width: 0.53, height: 4.5 },
    { value: 10, color: 'green', width: 0.5, height: 3.8 },
    { value: 5, color: 'white', width: 0.48, height: 3 },
    { value: 2.5, color: '#2d2d2d', width: 0.46, height: 2.5 },
    { value: 1.25, color: 'silver', width: 0.46, height: 2 },
  ];

  const renderPlates = () => {
    let remainingWeight = (weight - 20) / 2;
    const renderedPlates = [];

    for (const plate of plates) {
      const { value, ...rectProps } = plate;

      while (remainingWeight >= value) {
        renderedPlates.push(<Plate key={crypto.randomUUID()} {...rectProps} />);
        remainingWeight -= value;
      }
    }

    return renderedPlates;
  };

  return <div className="WeightVisualizer">{renderPlates()}</div>;
}
