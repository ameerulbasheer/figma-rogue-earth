export function SheetHeader({ name, description, onChange }) {
  return (
    <div className="flex items-start justify-between pb-2 border-b-2 border-dark-grey mb-3">
      <div className="flex flex-col gap-1 flex-1">
        <input
          type="text"
          value={name}
          onChange={e => onChange('name', e.target.value)}
          placeholder="Character Name"
          className="font-mono text-xl text-dark-grey bg-transparent border-b border-dashed border-mid-grey w-full placeholder:text-light-grey focus:border-dark-grey"
        />
        <input
          type="text"
          value={description}
          onChange={e => onChange('description', e.target.value)}
          placeholder="Description / Archetype"
          className="font-body text-sm text-dark-grey bg-transparent border-b border-dashed border-mid-grey w-full placeholder:text-light-grey focus:border-dark-grey"
        />
      </div>
      <div className="ml-4 text-right">
        <div className="font-mono text-xl font-bold text-dark-grey leading-tight">ROGUE</div>
        <div className="font-mono text-xl font-bold text-dark-grey leading-tight">EARTH</div>
      </div>
    </div>
  )
}
