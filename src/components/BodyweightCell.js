import './BodyweightCell.css';

export default function BodyweightCell() {
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
}
