export default function SelectedMovie({
  selectedId,
  onCloseMovie,
}: {
  selectedId: string;
  onCloseMovie: () => void;
}) {
  return (
    <>
      <div className="details">
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        {selectedId}
      </div>
    </>
  );
}
