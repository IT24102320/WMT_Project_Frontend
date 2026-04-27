import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <img
        src={item.imageUrl || "data:image/webp;base64,UklGRkwEAABXRUJQVlA4IEAEAAAwGACdASpzAHUAPp1MnUwlpCKiJhVZsLATiWMA1HlFY60MfoL8SLpAeYDogf7T0oOoA3lV9luruw2XCEVZO6r4TS8pX1T+wXwB/yT+j/8Trwegv+pJKWoCsCVsJNfbKu3cjc1VfItebYKogzYcQIWanacBBz6LDYlka/XUJoKhAOKRu7TocXYl+5+Y/1WqbEKDZ+aM2A67Oel7YP7wUEH+vHrwm/1BwJQKETEIYqJtwya4tIdq9OBGnNrgdDAzHvtebpxHr7UjJEfQAP76toAotAlzxj0cPsPO/+rghiDiIngVwwU8/9pprWLfY5wRvGj7o4gOMjTKZ4nnX+OK+lx4sFKmvGUKdZqBdTPaUsOv5wUfJNP78b/gRx/QQ+vi1vAf8QrkxhLTJlWrUv8ZZQ7ahJGje8LK8U++2b+Hnwv71t5b/3X9CrPSzVVHewvaWa990afb6iWLMxMPDkB+U42yt2TAvgqg4le328PeQnJrFsUUCrtAArjJMohZlYwcebdI38Re6tEe6hG3p+fxVA3NlCjAmG9W1di64oRxlNEKNua++M7mJxvP6Ft2iMNrGwFFn/uH2J6OPBVL0YEsavSMa1liz197M4B5NY01+n7OV3WvhX4UcwKOQn1qkKiYtfnFqy6AfHaElH6wA28BY9vNBDmt7kcdAa4a8Ayti1oStDiE8jv/6A2t/YSEjZniJuZrpfiRYAwebLLdox3/8knQmlbiO2wXBrjzZFju31IosaoziGUQVU2s6vXkqlpKTKTdMgZfmSpt/WFkX1ON6pnpyzwzkrE2Y2e1RmTq5kiaDACm/GKHI9IYAbiN3+ieihpZ29wW5vFz2+NuexwB1mHmgsqZ4UtPpw5VLIXbcALCmifjDxdbe5vapey+NNX2w2iJU91NPPtzohkTHJqq9vXY/FTCEeXB8L4JpF9JjAcvlQ7yQKDHXOYEeAx9CtfJgSsOfDpXnGlPqmrSv5hauSseVTw9T7tvj5Sa/zOs7YXvU9T+kzAscT655ACC4t2J6Pwwyy6QO3m8aC6nwl79spagek9yvSvQSEZxGn4nv9HASXcW+5/50Gv7sygBm4UptlVQoswNX9WWzq2Db8FDv6xJuaHwetfriDnOZed0lh+eqiA1kHse5Zc94vr7GoACSGlCIueM1bmXUfC4zzL2SFEgoAl4WGd0jrd2sdemELh6USw5juQno4+7SQn3DX42g3xgBXELxw9prnalkL/JSrr+daqwZsQwAJqH2bfE8zh5J5InYttV5BdbDipdmfnUj616PV2VRcLw9sONu4vtXhbGvAS1vaAiDYXGDdSbYw8oAyfx1NpA12xxdj8B5PolYzJHc0T2GjEjXHgb30ofMHkgTVwAfBcM4G4XizYdhtWiBUdwBnqkOx/nzUTHXr3g3zhEsWZ3YeujE9QWizLjwCq5H4Z0+1S24HtJeBr9niAAAA=="}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Discount:</strong> {item.discountPercentage ?? 0}%</p>
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;