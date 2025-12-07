'use client';
import SnapshotCollapsed from '../../components/SnapshotCollapsed';
import snapshots from '../../data/timeline.json';

function TimelineBlockPage() {
  return (
    <div className="w-11/12 mx-auto gap-4">
      {snapshots.map(snapshot => (
        <SnapshotCollapsed key={snapshot.timeframe} snapshot={snapshot} />
      ))}
    </div>
  );
}

export default TimelineBlockPage;
