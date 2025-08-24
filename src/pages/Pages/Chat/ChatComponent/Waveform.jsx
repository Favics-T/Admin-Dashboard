
const Waveform = () => {
  const bars = new Array(20).fill(0);
  return (
    <div className="flex items-end gap-0.5 h-6">
      {bars.map((_, i) => (
        <div
          key={i}
          className="w-0.5 rounded-full bg-current"
          style={{ height: `${(Math.sin(i) + 1) * 6 + 4}px` }}
        />
      ))}
    </div>
  );
}

export default Waveform