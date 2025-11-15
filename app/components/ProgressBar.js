export default function ProgressBar({ estudiadas, total }) {
  const progressPercentage = (estudiadas / total) * 100;

  return (
    <div className="progress-bar">
      <div 
        className="progress" 
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}