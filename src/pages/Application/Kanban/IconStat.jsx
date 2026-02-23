function IconStat({ icon: Icon, value, label }) {
  return (
    <div
      className="inline-flex items-center gap-1.5"
      aria-label={label}
      title={label}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span className="text-sm text-gray-600">{value}</span>
    </div>
  );
}

export default IconStat
