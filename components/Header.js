export default function Header({ title }) {
  return <div className="header">
    <img className="logo" alt="logo" src="https://pbs.twimg.com/profile_images/1289453448748965895/FDqf0QIu_400x400.jpg"/>
    <div className="live-blink">
      <img src="/live.gif" className="live-dot"/>
      <p>Himanshu R.</p>
    </div>
  </div>
}
