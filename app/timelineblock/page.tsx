'use client';
import SnapshotCollapsed from '../../components/SnapshotCollapsed';
import snapshots from '../../data/timeline.json';

function TimelineBlockPage() {
  return (
    <div className="w-full mx-auto">
      {snapshots.map(snapshot => (
        <SnapshotCollapsed key={snapshot.timeframe} snapshot={snapshot} />
      ))}
    </div>
  );
}

export default TimelineBlockPage;
