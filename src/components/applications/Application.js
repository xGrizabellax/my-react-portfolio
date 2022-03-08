import { useOutletContext, useParams } from "react-router-dom";
import { Card } from "antd";
// const { Meta } = Card;


export default function Application({ appData }) {
    const [selectedApp, setSelectedApp] = useOutletContext();
    const { id } = useParams()
    console.log('url id:', id)
  
    // id =  '/my-react-portfolio/' + {id}
    const app = selectedApp;
    console.log(app)
    const display = selectedApp ? (
      <a href={app.url}>
        <h1 className="app-title">{app.title}</h1>
        <Card
          key={app.id}
          hoverable
          // style={{ width: 240 }}
          cover={
            <img className="app-img" alt={app.title} src={app.imageSrc} />
          }
        >
        </Card>
        </a>
      ) : (
        <a href={appData[0].url}>
          <h1 className="app-title">{appData[0].title}</h1>
          <Card
            key={appData[0].id}
            hoverable
            // style={{ width: 240 }}
            cover={
              <img className="app-img" alt={appData[0].title} src={appData[0].imageSrc} />
            }
          >
          </Card>
          </a>
        )
  
      return display
  }
