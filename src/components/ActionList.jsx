
export default function ActionList({ actions, onAction }) {


  return (
    <div style={{ marginTop: 20 }}>
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => action.handler()}
          style={{ marginRight: 10, marginBottom: 10 }}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
