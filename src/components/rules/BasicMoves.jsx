import { SectionHeader } from '../common/SectionHeader'

export function BasicMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Basic Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <Move
          name="Act Under Pressure"
          trigger="When you act despite danger, opposition, or fear"
          roll="Roll +COURAGE"
          results={[
            { range: '10+', text: 'You do it. Take +1 forward.' },
            { range: '7–9', text: 'You do it, but the GM offers you a worse outcome, hard bargain, or ugly choice.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
        />
        <Move
          name="Help or Hinder"
          trigger="When you help or hinder another character"
          roll="Roll +HOPE (help) or +COURAGE (hinder)"
          results={[
            { range: '10+', text: 'They take +1 or −2 to their roll.' },
            { range: '7–9', text: 'They take +1 or −1, but you share in any consequences.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
        />
        <Move
          name="Read a Person"
          trigger="When you study someone's intentions or emotions"
          roll="Roll +HOPE"
          results={[
            { range: '10+', text: 'Ask the player or GM three questions from the list; they must answer honestly.' },
            { range: '7–9', text: 'Ask one question.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
          extra="Questions: What do you really want? What are you afraid of? What do you need from me? Are you lying? How can I help you?"
        />
        <Move
          name="Assess the Situation"
          trigger="When you take stock of your surroundings or gather information"
          roll="Roll +HOPE"
          results={[
            { range: '10+', text: 'Ask three questions; take +1 forward for each answer you act on.' },
            { range: '7–9', text: 'Ask one question; take +1 forward if you act on the answer.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
          extra="Questions: What is the biggest threat? What is hidden or unseen? What is the safest path? Who or what controls this place? What can I use to my advantage?"
        />
        <Move
          name="Persuade or Manipulate"
          trigger="When you try to convince someone to do something"
          roll="Roll +HOPE (honest) or +COURAGE (coercion)"
          results={[
            { range: '10+', text: 'They do it; if NPC they also act in your interest.' },
            { range: '7–9', text: 'They need proof, a favour, or reassurance first.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
        />
        <Move
          name="Take a Risk"
          trigger="When you do something risky with no better move"
          roll="Roll +COURAGE"
          results={[
            { range: '10+', text: 'You succeed fully.' },
            { range: '7–9', text: 'You succeed, but mark one stress or face a consequence.' },
            { range: '6−', text: 'The GM makes a move.' },
          ]}
        />
      </div>
    </div>
  )
}

function Move({ name, trigger, roll, results, extra }) {
  return (
    <div className="border-l-2 border-dark-grey pl-3">
      <div className="font-mono font-bold text-dark-grey">{name}</div>
      <div className="text-xs text-mid-grey italic mb-1">{trigger}</div>
      <div className="font-mono text-xs text-dark-grey mb-1">{roll}</div>
      <ul className="flex flex-col gap-0.5">
        {results.map(r => (
          <li key={r.range} className="flex gap-2 text-xs">
            <span className="font-mono font-bold flex-shrink-0 w-10">{r.range}</span>
            <span>{r.text}</span>
          </li>
        ))}
      </ul>
      {extra && <div className="text-xs text-mid-grey mt-1 italic">{extra}</div>}
    </div>
  )
}
