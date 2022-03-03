import { useOutletContext, useParams } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function Application() {
    const [selectedApp, setSelectedApp] = useOutletContext();
    const { id } = useParams()
    console.log('url id:', id)
  
    const app = selectedApp;
    console.log(app)
    const display = selectedApp ? (
      <a href={app.url}>
        <Card
          key={app.id}
          hoverable
          style={{ width: 240 }}
          cover={
            <img className="app-img" alt={app.title} src={app.imageSrc} />
          }
        >
          <Meta title={app.title} />
        </Card>
        </a>
      ) : <p>Please select a app</p>
  
      return display
  }
