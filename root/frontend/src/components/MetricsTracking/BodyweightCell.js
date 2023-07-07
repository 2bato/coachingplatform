import './BodyweightCell.css';

const BodyweightCell = () => {
  return (
    <div className="BodyweightCell">
      <input
        placeholder="Bodyweight"
        size="10"
        type="text"
        contentEditable={true}
      />
    </div>
  );
};

export default BodyweightCell;
