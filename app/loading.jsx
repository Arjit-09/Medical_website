export default function Loading() {
  return (
    <div
      className="page-width loading-state"
      role="status"
      aria-label="Loading page"
    >
      <span className="loading-orb" />
      <span>Preparing your page</span>
    </div>
  );
}
