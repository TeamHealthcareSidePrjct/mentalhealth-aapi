export default function NameWelcome() {
  return (
    <div>
      <span>
        <h1>It's lovely to meet you, {this.props.name}.</h1>
      </span>
      <span>
        <h2>What would you like to explore?</h2>
      </span>
    </div>
  );
}
